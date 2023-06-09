import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  user: any = {};

  constructor() {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');

    this.user = user ? JSON.parse(user) : {};
  }
}
