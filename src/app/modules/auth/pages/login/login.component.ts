import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      log: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.formLogin.valid) {
      this.router.navigate(['dashboard']);
    }
  }

  get login() {
    return this.formLogin.get('login');
  }
  get password() {
    return this.formLogin.get('password');
  }
}
