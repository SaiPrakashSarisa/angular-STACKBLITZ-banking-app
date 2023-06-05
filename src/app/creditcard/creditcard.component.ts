import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css'],
})
export class CreditcardComponent implements OnInit {
  user: any;
  creditCards: any[] = [];

  newCardForm: boolean = false;
  editCardForm: boolean = false;

  selectedCard: any;

  constructor(public _route: Router) {}

  ngOnInit() {
    // getting all the data of the current logged user
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

    let creditCards = localStorage.getItem('creditCards');
    let userCards = creditCards ? JSON.parse(creditCards) : [];

    let userCreditCards = userCards.filter((card: any) => {
      return card.account === this.user.account;
    });

    this.creditCards = userCreditCards.map((card: any) => {
      let card1 = String(card.cardNumber).slice(0, 4);

      let card2 = String(card.cardNumber).slice(4, 8);

      let card3 = String(card.cardNumber).slice(8, 12);

      let card4 = String(card.cardNumber).slice(12, 16);

      return { ...card, card1, card2, card3, card4 };
    });
  }

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
