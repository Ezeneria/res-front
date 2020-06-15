import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public navLinks = [
    { location: '/dashboard/users/mentors', label: 'Mentors' },
    { location: '/dashboard/users/students', label: 'Students' },
    { location: '/dashboard/users/no-mentors', label: 'No mentors' },
    { location: '/dashboard/users/request', label: 'Request' },
  ];
}
