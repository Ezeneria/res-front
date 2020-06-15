import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule} from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationUserComponent } from './pages/registration/pages/registration-user/registration-user.component';
import { RegistrationMentorComponent } from './pages/registration/pages/registration-mentor/registration-mentor.component';
import {RegistrationService} from './services/registration.service';
const MaterialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    StartPageComponent,
    RegistrationUserComponent,
    RegistrationMentorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
  ],
  providers: [AuthService, RegistrationService]
})
export class AuthModule { }
