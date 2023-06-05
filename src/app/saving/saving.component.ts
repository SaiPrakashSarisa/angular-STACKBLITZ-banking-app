import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css'],
})
export class SavingComponent implements OnInit {
  user: any;
  transactions: any;
  // currentUserTransactions: any;
  userTransactions: any;

  showDepositform: boolean = false;
  showWithdrawform: boolean = false;
  showTransferform: boolean = false;

  constructor() {}

  ngOnInit() {
    // getting all the data of the current logged user
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

    // getting all the transactions
    let transactions = localStorage.getItem('transactions');
    this.transactions = transactions ? JSON.parse(transactions) : [];

    let currentUserTransactions = this.transactions.filter(
      (transaction: any) => {
        return transaction.account === this.user.account;
      }
    );
    let balance: number = 0;
    let totalBalance: number = 0;
    this.userTransactions = currentUserTransactions.map((transaction: any) => {
      if (transaction.type === 'credit') {
        totalBalance += Number(transaction.amount);
        balance = totalBalance;
        return (transaction = { ...transaction, balance });
      } else {
        totalBalance -= transaction.amount;
        balance = totalBalance;
        return (transaction = { ...transaction, balance });
      }
    });
    // console.log(currentUserTransactions);
    // console.log(this.userTransactions);
  }

  dformSubmit() {
    this.showDepositform = false;
  }

  wformSubmit() {
    this.showWithdrawform = false;
  }
  tformSubmit() {
    this.showTransferform = false;
  }
}
