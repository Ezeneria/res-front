import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registrUser(body): Observable<any> {
    return this.http.post('https://dev-api.investment.meotyda.com/auth/registration/', body);
  }
}
