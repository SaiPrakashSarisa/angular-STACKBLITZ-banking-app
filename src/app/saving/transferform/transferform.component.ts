import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface user {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  account: string;
  contact: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
}

@Component({
  selector: 'app-transferform',
  templateUrl: './transferform.component.html',
  styleUrls: ['./transferform.component.css'],
})
export class TransferformComponent implements OnInit {
  @Output()
  transfered = new EventEmitter();

  user!: user;
  totalBalance: number = 0;
  allTransactions: any;
  userTransactions: any;

  errMessage: boolean = false;

  constructor() {}

  ngOnInit() {
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

    // getting all the transactions
    let transactionsData = localStorage.getItem('transactions');
    this.allTransactions = transactionsData ? JSON.parse(transactionsData) : [];
    // filtering the current user transactions
    this.userTransactions = this.allTransactions.filter((transaction: any) => {
      return transaction.account === this.user.account;
    });
    // getting total Balance
    let totalBalance = this.userTransactions.map((transaction: any) => {
      if (transaction.type === 'credit') {
        this.totalBalance += Number(transaction.amount);
      } else {
        this.totalBalance -= transaction.amount;
      }
    });

    console.log(this.totalBalance);
  }

  transferForm = new FormGroup({
    amount: new FormControl('', [Validators.required]),
    taccount: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),
  });

  // methods to get form data values.
  get amount() {
    return this.transferForm.get('amount')?.value || null;
  }

  get account() {
    return this.transferForm.get('taccount')!.value;
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

  transfer() {
    if (this.totalBalance > Number(this.amount)) {
      console.log('inside if');
      console.log(this.account);
      console.log(this.user.account);

      let usersData = localStorage.getItem('userData');
      let tUserData = usersData ? JSON.parse(usersData) : [];

      let transferUser = tUserData.find((user: user) => {
        if (user.account === this.account) {
          return user;
        }
      });

      if (transferUser) {
        let transaction1 = {
          account: this.user.account,
          type: 'debit',
          amount: this.amount,
          date: this.dateTime[0],
          time: this.dateTime[1],
        };

        let transaction2 = {
          account: this.account,
          type: 'credit',
          amount: this.amount,
          date: this.dateTime[0],
          time: this.dateTime[1],
        };

        this.allTransactions.push(transaction1, transaction2);
        localStorage.setItem(
          'transactions',
          JSON.stringify(this.allTransactions)
        );
        this.transfered.emit();
      }
    } else {
      this.errMessage = true;
    }
  }
}
