import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcardform',
  templateUrl: './newcardform.component.html',
  styleUrls: ['./newcardform.component.css'],
})
export class NewcardformComponent implements OnInit {
  @Output()
  newCardAdded = new EventEmitter();

  constructor() {}

  creditCards = [{}];

  ngOnInit() {}

  newCard = new FormGroup({
    cardNumber: new FormControl(''),
    cvv: new FormControl(''),
    cardType: new FormControl(''),
    expDate: new FormControl(''),
    bank: new FormControl(''),
  });

  cardSubmit() {
    let card1 = String(this.newCard.get('cardNumber')!.value)!.slice(0, 4);

    let card2 = String(this.newCard.get('cardNumber')!.value)!.slice(4, 8);

    let card3 = String(this.newCard.get('cardNumber')!.value)!.slice(8, 12);

    let card4 = String(this.newCard.get('cardNumber')!.value)!.slice(12, 16);

    let card = {
      cardNumber: this.newCard.get('cardNumber')!.value,
      cvv: this.newCard.get('cvv')!.value,
      cardType: this.newCard.get('cardType')!.value,
      expDate: this.newCard.get('expDate')!.value,
      bank: this.newCard.get('bank')!.value,
      card1: card1,
      card2: card2,
      card3: card3,
      card4: card4,
    };

    this.newCardAdded.emit(card);
    this.creditCards.push(card);
    console.log(this.creditCards);
  }
}
