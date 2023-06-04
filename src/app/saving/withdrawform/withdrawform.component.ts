import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdrawform',
  templateUrl: './withdrawform.component.html',
  styleUrls: ['./withdrawform.component.css'],
})
export class WithdrawformComponent implements OnInit {
  user: any;
  transactions: any;
  errMessage: boolean = false;
  sucessMessage: boolean = false;

  constructor() {}

  ngOnInit() {
    // getting all the data of the current logged user
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

    // getting all the transactions
    let transactions = localStorage.getItem('transactions');
    this.transactions = transactions ? JSON.parse(transactions) : [];
  }

  // buiding form group
  withdrawForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.min(101)]),
  });
  // getter method to access the value of the form controls
  get amount() {
    return this.withdrawForm.get('amount')?.value || null;
  }

  // method to build date and time
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

  withdraw() {
    // separatin the transaction details
    let currentUserTransactions = this.transactions.filter(
      (transaction: any) => {
        return transaction.account === this.user.account;
      }
    );

    let availableBalance = 0;

    // calculating total balance
    let totalBalance = currentUserTransactions.map((transaction: any) => {
      if (transaction.type === 'credit') {
        availableBalance += transaction.amount;
      } else {
        availableBalance -= transaction.amount;
      }
    });

    console.log(availableBalance);

    // console.log(currentUserTransactions, ' Are the current user transactions');

    let currentTransaction = {
      account: this.user.account,
      type: 'debit',
      amount: Number(this.amount),
      date: this.dateTime[0],
      time: this.dateTime[1],
    };

    if (availableBalance >= currentTransaction.amount) {
      if (this.withdrawForm.valid) {
        // pusing the current transaction into the transactions array of objects
        this.transactions.push(currentTransaction);
        // updating the transactions arrya of objects in local storage
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
        this.sucessMessage = true;
      }
    } else {
      this.errMessage = true;
    }
    console.log(currentTransaction);
  }
}
