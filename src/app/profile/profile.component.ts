import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = {
    firstname: 'Jyothi Sai Prakash',
    lastname: 'Sarisa',
    account: '202302134100',
    username: 'saiprakash08',
    password: 'sai@123',
    email: 'saiprakashsarisa@gmail.com',
    contact: '8099308161',
    address: 'Anakapalli',
  };
  constructor() {}

  ngOnInit() {}
}
