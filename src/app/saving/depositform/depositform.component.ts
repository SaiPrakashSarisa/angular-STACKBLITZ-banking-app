import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-depositform',
  templateUrl: './depositform.component.html',
  styleUrls: ['./depositform.component.css'],
})
export class DepositformComponent implements OnInit {
  user: any;

  withdrawForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit() {
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};
  }

  get dateTime(): any[] {
    let timeStamp = new Date();
    let date = timeStamp.getDate();
    let month = timeStamp.getMonth();
    let year = timeStamp.getFullYear();
    let hours = timeStamp.getHours();
    let minutes = timeStamp.getMinutes();
    let seconds = timeStamp.getSeconds();

    let myDate = year + '-' + month + '-' + date;
    let myTime = hours + ':' + minutes + ':' + seconds;
    return [myDate, myTime];
  }

  deposit() {
    console.log('inside submit functio');
    console.log(this.withdrawForm.value);

    let transaction = {
      account: '202302134100',
      type: 'credit',
      amount: 500,
      date: '2023-05-04',
      time: '06:00:00',
      balance: 1900,
    };
  }
}
