import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './pages/quiz/quiz.component';
import {CoursesComponent} from './pages/courses/courses.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {UsersComponent} from './pages/users/users.component';
import {BoardComponent} from './pages/board/board.component';
import {DashboardComponent} from './dashboard.component';
import {HotDealsComponent} from './pages/hot-deals/hot-deals.component';
import {QuizRecomendationComponent} from './pages/quiz/components/pages/quiz-recomendation/quiz-recomendation.component';
import {QuizQuestionComponent} from './pages/quiz/components/pages/quiz-question/quiz-question.component';
import {MentorsComponent} from './pages/users/pages/mentors/mentors.component';
import {StudentsComponent} from './pages/users/pages/students/students.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
    children: [
      {
        component: BoardComponent,
        path: 'board',
        data: { animation: 'isRight' }
      },
      {
        component: UsersComponent,
        path: 'users',
        children: [
          {
            path: '', redirectTo: 'students',
          },
          {
            component: MentorsComponent,
            path: 'mentors'
          },
          {
            component: StudentsComponent,
            path: 'students'
          }
        ]
      },
      {
        component: QuizComponent,
        path: 'quiz',
        children: [
          {
            path: '', redirectTo: 'questions'
          },
          {
            component: QuizRecomendationComponent,
            path: 'recommendations',
          },
          {
            component: QuizQuestionComponent,
            path: 'questions',
          }]
      },
      {
        component: CoursesComponent,
        path: 'courses',
      },
      {
        component: ReportsComponent,
        path: 'reports',
      },
      {
        component: HotDealsComponent,
        path: 'hot-deals'
      }
    ]
  },
  {
    path: '**', redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
