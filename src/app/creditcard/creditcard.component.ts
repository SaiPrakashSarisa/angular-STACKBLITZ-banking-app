import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  creditCards: any[] = [
    {
      account: '202302134100',
      cardnumber: '4152706006569012',
      card1: '4152',
      card2: '7060',
      card3: '0656',
      card4: '9012',
      expdate: '11/30',
      cvv: '559',
      limit: 100000,
      availableAmount: 99500,
      type: 'VISA',
      duedate: '5/6/2023',
      dueamount: 0,
    },
    {
      account: '202302134100',
      cardnumber: '5073093850960071',
      card1: '5073',
      card2: '0938',
      card3: '5096',
      card4: '0071',
      expdate: '02/26',
      cvv: '489',
      limit: 100000,
      availableAmount: 91000,
      type: 'RuPay',
      duedate: '5/6/2023',
      dueamount: 9000,
    },
    {
      account: '202302134100',
      cardnumber: '4071006313874321',
      card1: '4071',
      card2: '0063',
      card3: '1387',
      card4: '4321',
      expdate: '05/32',
      cvv: '878',
      limit: 100000,
      availableAmount: 100000,
      type: 'VISA',
      duedate: 'nan',
      dueamount: 0,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
