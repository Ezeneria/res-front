import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {ReportsComponent} from './pages/reports/reports.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  },
  {
    component: QuizComponent,
    path: 'quiz',
  },
  {
    component: CoursesComponent,
    path: 'courses',
  },
  {
    component: ReportsComponent,
    path: 'reports',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
