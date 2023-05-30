import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css'],
})
export class SavingComponent implements OnInit {
  transactions = [
    {
      account: '202302134100',
      type: 'credit',
      amount: 500,
      date: '2023-05-04',
      time: '06:00:00',
      balance: 1900,
    },
    {
      account: '202302134100',
      type: 'debit',
      amount: 1500,
      date: '2023-05-04',
      time: '06:13:00',
      balance: 1400,
    },
    {
      account: '202302134100',
      type: 'credit',
      amount: 2500,
      date: '2023-05-04',
      time: '06:30:00',
      balance: 2900,
    },
    {
      account: '202302134100',
      type: 'debit',
      amount: 500,
      date: '2023-05-04',
      time: '06:45:00',
      balance: 400,
    },
    {
      account: '202302134100',
      type: 'debit',
      amount: 200,
      date: '2023-04-05',
      time: '05:39:52',
      balance: 900,
    },
    {
      account: '202302134100',
      type: 'credit',
      amount: 100,
      date: '2023-04-05',
      time: '05:40:05',
      balance: 1100,
    },
    {
      account: '202302134100',
      type: 'credit',
      amount: 1000,
      date: '2023-04-05',
      time: '06:17:18',
      balance: 1000,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
