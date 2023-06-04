import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any = {};

  constructor() {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');

    this.user = user ? JSON.parse(user) : {};
  }
}
