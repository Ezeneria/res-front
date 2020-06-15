import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {RegistrationUserComponent} from './pages/registration/pages/registration-user/registration-user.component';
import {RegistrationMentorComponent} from './pages/registration/pages/registration-mentor/registration-mentor.component';

const routes: Routes = [
  {
    component: StartPageComponent,
    path: '',
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: RegistrationComponent,
    path: 'registration',
    children: [
      {
        component: RegistrationUserComponent,
        path: 'user',
      },
      {
        component: RegistrationMentorComponent,
        path: 'mentor'
      },
      {
        path: '**', redirectTo: 'user'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
