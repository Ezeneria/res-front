### STAGE 1: Build ###
FROM node:12-alpine as builder
MAINTAINER Artem Demidenko <ar.demidenko@gmail.com>
RUN mkdir -p /app
WORKDIR /app
COPY . /app/
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force && rm -rf node_modules/
RUN npm ci
RUN $(npm bin)/ng build --prod

### STAGE 2: Image ###
FROM debian:buster-slim
MAINTAINER Artem Demidenko <ar.demidenko@gmail.com>

ENV API_URL 'http://localhost/api'
ENV WS_URL 'ws://localhost/ws'

RUN apt-get update && apt-get install -y \
    curl gnupg2 ca-certificates lsb-release \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN echo "deb http://nginx.org/packages/mainline/debian buster nginx" | tee /etc/apt/sources.list.d/nginx.list
RUN apt-key adv --fetch-keys https://nginx.org/keys/nginx_signing.key

RUN apt-get update && apt-get install -y \
    gettext \
    supervisor \
    nginx \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN sed -i 's/^\(\[supervisord\]\)$/\1\nnodaemon=true/' /etc/supervisor/supervisord.conf

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY ./etc/supervisor/conf.d/nginx.conf /etc/supervisor/conf.d/nginx.conf

# TODO: Need more time
COPY bin/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

VOLUME '/etc/nginx/conf.d'
VOLUME '/etc/supervisor/conf.d'
VOLUME '/usr/share/nginx/html'

WORKDIR /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
