import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any[] = [];

  currentUser: any = {};

  errorMessage: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private route: Router) {}

  ngOnInit() {}

  get username() {
    return this.loginForm.get('username')!.value;
  }

  get password() {
    return this.loginForm.get('password')!.value;
  }

  login() {
    console.log(this.loginForm.value);

    const userData = localStorage.getItem('userData');

    this.users = userData ? JSON.parse(userData) : [];

    const loggedUser = this.users.find((user) => {
      if (user.userName === this.username && user.password === this.password) {
        this.currentUser = user;
        this.route.navigate(['/dashboard']);

        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return user;
      } else {
        this.errorMessage = true;
      }
    });

    console.log(this.users);
  }
}
