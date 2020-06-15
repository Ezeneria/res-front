import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, forkJoin, Observable, Subject} from 'rxjs';
import {Mentor, User, UserList} from '../../../../../../core/models/models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public fakeData: UserList[] = [
    {
       email: 'test@mail.ru', firstName: 'Vyacheslav', lastName: 'Philimonov', status: false, mentorID: 10
    },
    {
       email: 'test@mail.ru', firstName: 'Egor', lastName: 'Phil', status: true, mentorID: 22
    },
    {
       email: 'test@mail.ru', firstName: 'Kirill', lastName: 'Kirillov', status: true, mentorID: 13
    },
  ];
  public fakeMentors = [
    {
      firstName: 'Frank',
      lastName: 'Sinatra',
      id: 10
    },
    {
      firstName: 'Jill',
      lastName: 'Huston',
      id: 22
    },
    {
      firstName: 'Gary',
      lastName: 'Clarckson',
      id: 13
    },
  ];

  public userList: BehaviorSubject<UserList[]> = new BehaviorSubject(this.fakeData);
  public userListObs: Observable<UserList[]> = this.userList.asObservable();
  public mentorsList: BehaviorSubject<Mentor[]> = new BehaviorSubject(this.fakeMentors);
  public mentorsListObj: Observable<Mentor[]> = this.mentorsList.asObservable();

  public getUsers(): Observable<UserList[]> {
    return this.userListObs;
  }

  public getMentors(): Observable<Mentor[]> {
    return this.mentorsListObj;
  }

  public getUsersAndMentors(): Observable<[UserList[], Mentor[]]> {
    return combineLatest([this.getUsers(), this.getMentors()]);
  }
}
