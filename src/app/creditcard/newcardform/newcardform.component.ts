import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcardform:not(a)',
  templateUrl: './newcardform.component.html',
  styleUrls: ['./newcardform.component.css'],
})
export class NewcardformComponent implements OnInit {
  user: any;

  constructor() {}

  creditCards = [{}];

  ngOnInit() {
    // getting all the data of the current logged user
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

    let creditCards = localStorage.getItem('creditCards');
    this.creditCards = creditCards ? JSON.parse(creditCards) : [];
  }

  newCard = new FormGroup({
    cardNumber: new FormControl(''),
    cvv: new FormControl(''),
    cardType: new FormControl(''),
    expDate: new FormControl(''),
    bank: new FormControl(''),
  });

  cardSubmit() {
    let card = {
      account: this.user.account,
      cardNumber: this.newCard.get('cardNumber')!.value,
      cvv: this.newCard.get('cvv')!.value,
      cardType: this.newCard.get('cardType')!.value,
      expDate: this.newCard.get('expDate')!.value,
      bank: this.newCard.get('bank')!.value,
    };

    this.creditCards.push(card);
    localStorage.setItem('creditCards', JSON.stringify(this.creditCards));
    console.log(this.creditCards);
  }
}
