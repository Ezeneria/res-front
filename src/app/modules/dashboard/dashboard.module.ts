import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UsersComponent } from './pages/users/users.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HotDealsComponent } from './pages/hot-deals/hot-deals.component';
import { ReportsComponent } from './pages/reports/reports.component';



@NgModule({
  declarations: [DashboardComponent, QuizComponent, UsersComponent, CoursesComponent, HotDealsComponent, ReportsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
