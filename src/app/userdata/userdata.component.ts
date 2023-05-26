import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
})
export class UserdataComponent implements OnInit {
  users: any[] = [];
  constructor() {}

  ngOnInit() {
    let userdata = localStorage.getItem('user');
    console.log(userdata);
  }
}
