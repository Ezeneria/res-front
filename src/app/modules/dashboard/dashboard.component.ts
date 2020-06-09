import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
      ]),
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  navLinks = [
    { location: '/dashboard/board', label: 'Dashboard' },
    { location: '/dashboard/users', label: 'Users' },
    { location: '/dashboard/courses', label: 'Courses' },
    { location: '/dashboard/hot-deals', label: 'Hot deals' },
    { location: '/dashboard/users', label: 'reports' },
    { location: '/dashboard/quiz', label: 'Quiz' }
  ]
  constructor() { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }

  ngOnInit(): void {
  }

}
