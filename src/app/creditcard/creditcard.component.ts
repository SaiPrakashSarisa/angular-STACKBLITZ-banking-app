import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  creditCards: any[] = [
    {
      account: '202302134100',
      cardNumber: '4152706006569012',
      bank: 'SBI',
      card1: '4152',
      card2: '7060',
      card3: '0656',
      card4: '9012',
      expDate: '11/30',
      cvv: '559',
      limit: 100000,
      availableAmount: 99500,
      duedate: '5/6/2023',
      dueamount: 0,
      cardType: 'Master',
      card: 'Credit',
    },
    {
      account: '202302134100',
      cardNumber: '5073093850960071',
      bank: 'ICICI',
      card1: '5073',
      card2: '0938',
      card3: '5096',
      card4: '0071',
      expDate: '02/26',
      cvv: '489',
      limit: 100000,
      availableAmount: 91000,
      duedate: '5/6/2023',
      dueamount: 9000,
      cardType: 'Rupay',
      card: 'Debit',
    },
    {
      account: '202302134100',
      cardNumber: '4071006313874321',
      bank: 'HDFC',
      card1: '4071',
      card2: '0063',
      card3: '1387',
      card4: '4321',
      expDate: '05/32',
      cvv: '878',
      limit: 100000,
      availableAmount: 100000,
      duedate: 'nan',
      dueamount: 0,
      cardType: 'VISA',
      card: 'Credit',
    },
  ];

  // method for getting data form newcardform
  addNewCard(newCardData: any) {
    this.creditCards.push(newCardData);
  }

  newCardForm: boolean = false;
  editCardForm: boolean = true;

  selectedCard: any;

  constructor(public _route: Router) {}

  ngOnInit() {}

  editCard(card: any) {
    this.selectedCard = card;
    console.log(this.selectedCard);
  }

  updateCard(updatedCard: any) {
    this.creditCards.find((card) => {
      if (card.cardNumber == this.selectedCard.cardNumber) {
        card.cardNumber = updatedCard.cardNumber;
        card.cvv = updatedCard.cvv;
        card.cardType = updatedCard.cardType;
        card.expDate = updatedCard.expDate;
        card.bank = updatedCard.bank;
        card.card1 = updatedCard.card1;
        card.card2 = updatedCard.card2;
        card.card3 = updatedCard.card3;
        card.card4 = updatedCard.card4;
      }
    });
  }
}
