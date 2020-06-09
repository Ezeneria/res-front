import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.formLogin = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.formLogin.valid) {
      this.router.navigate(['dashboard']);
    }
    this.auth.auth({email: 'admin@localhost.localdomain', password: 'admin'}).subscribe(val => {
      console.log('val');
    });
  }
  ngOnInit(): void {
    console.log(this.formLogin);
  }

  get login() {
    return this.formLogin.get('login');
  }
  get log() {
    return this.formLogin.get('log');
  }
  get password() {
    return this.formLogin.get('password');
  }
}
