import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit(e) {
    if (this.formLogin.valid) {
      this.router.navigate(['dashboard']);
    }
    // {email: 'admin@localhost.localdomain', password: 'admin'}
    this.auth.auth(this.formLogin.value).subscribe(val => {
      console.log(val);
    });
  }

  ngOnInit(): void {
    console.log(this.formLogin);
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
