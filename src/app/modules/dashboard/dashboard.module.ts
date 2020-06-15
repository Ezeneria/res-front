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
import {DialogOverviewExampleDialogComponent, StudentsComponent} from './pages/users/pages/students/students.component';
import { MentorsComponent } from './pages/users/pages/mentors/mentors.component';
import { NoMentorsComponent } from './pages/users/pages/no-mentors/no-mentors.component';
import { RequestComponent } from './pages/users/pages/request/request.component';
import {UserService} from './pages/users/pages/students/user.service';



@NgModule({
  declarations: [
    DashboardComponent,
    QuizComponent,
    UsersComponent,
    CoursesComponent,
    HotDealsComponent,
    ReportsComponent,
    BoardComponent,
    QuizRecomendationComponent,
    QuizQuestionComponent,
    StudentsComponent,
    MentorsComponent,
    DialogOverviewExampleDialogComponent,
    NoMentorsComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [DashboardComponent],
  entryComponents: [DashboardComponent, DialogOverviewExampleDialogComponent]
})
export class DashboardModule { }
