import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {User} from '../../core/models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string = null;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  auth(body): Observable<User> {
    return this.http.post<User>('http://dev.investment.meotyda.com/auth/login/', body).pipe(map((user: User) => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigate(['/dashboard']);
      }
      return user;
    }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}


