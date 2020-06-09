import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UsersComponent } from './pages/users/users.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HotDealsComponent } from './pages/hot-deals/hot-deals.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BoardComponent } from './pages/board/board.component';
import {SharedModule} from '../../shared/shared.module';
import { QuizRecomendationComponent } from './pages/quiz/components/pages/quiz-recomendation/quiz-recomendation.component';
import { QuizQuestionComponent } from './pages/quiz/components/pages/quiz-question/quiz-question.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { StudentsComponent } from './pages/users/pages/students/students.component';
import { MentorsComponent } from './pages/users/pages/mentors/mentors.component';



@NgModule({
  declarations: [DashboardComponent, QuizComponent, UsersComponent, CoursesComponent, HotDealsComponent, ReportsComponent, BoardComponent, QuizRecomendationComponent, QuizQuestionComponent, StudentsComponent, MentorsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule { }
