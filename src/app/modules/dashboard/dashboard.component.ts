import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public navLinks = [
    { location: '/dashboard/board', label: 'Dashboard' },
    { location: '/dashboard/users', label: 'Users' },
    { location: '/dashboard/courses', label: 'Courses' },
    { location: '/dashboard/hot-deals', label: 'Hot deals' },
    { location: '/dashboard/users', label: 'reports' },
    { location: '/dashboard/quiz', label: 'Quiz' }
  ];
}
