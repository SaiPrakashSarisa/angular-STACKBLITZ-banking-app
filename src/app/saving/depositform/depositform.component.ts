import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-depositform:not(s)',
  templateUrl: './depositform.component.html',
  styleUrls: ['./depositform.component.css'],
})
export class DepositformComponent implements OnInit {
  @Output()
  dformSubmitted = new EventEmitter();

  user: any;
  transactions: any;
  errMessage: boolean = false;
  sucessMessage: boolean = false;

  depositForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.min(101)]),
  });
  constructor() {}

  ngOnInit() {
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};
  }

  get amount() {
    return this.depositForm.get('amount')!.value;
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
    console.log(this.depositForm.value);

    let currentTransaction = {
      account: this.user.account,
      type: 'credit',
      amount: this.amount,
      date: this.dateTime[0],
      time: this.dateTime[1],
    };

    if (this.depositForm.valid) {
      let transactions = localStorage.getItem('transactions');
      this.transactions = transactions ? JSON.parse(transactions) : [];
      // pusing the current transaction into the transactions array of objects
      this.transactions.push(currentTransaction);
      // updating the transactions arrya of objects in local storage
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
      this.sucessMessage = true;
    } else {
      this.errMessage = true;
    }
    this.dformSubmitted.emit();
    console.log('Transaction Object is created ', currentTransaction);
  }
}
