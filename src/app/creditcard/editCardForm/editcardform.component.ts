import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editcardform',
  templateUrl: './editcardform.component.html',
  styleUrls: ['./editcardform.component.css'],
})
export class EditcardformComponent implements OnInit {
  @Input()
  cardData: any;

  @Output()
  editedCard = new EventEmitter();
  constructor() {}

  editFormGroup!: FormGroup;

  ngOnInit() {
    console.log(this.cardData);
    this.editFormGroup = new FormGroup({
      cardNumber: new FormControl(this.cardData?.cardNumber),
      cvv: new FormControl(''),
      cardType: new FormControl(''),
      expDate: new FormControl(''),
      bank: new FormControl(''),
    });
  }

  editCard() {
    console.log(this.editFormGroup.value);
    let card1 = String(this.editFormGroup.get('cardNumber')!.value)!.slice(
      0,
      4
    );

    let card2 = String(this.editFormGroup.get('cardNumber')!.value)!.slice(
      4,
      8
    );

    let card3 = String(this.editFormGroup.get('cardNumber')!.value)!.slice(
      8,
      12
    );

    let card4 = String(this.editFormGroup.get('cardNumber')!.value)!.slice(
      12,
      16
    );

    let editedCard = {
      cardNumber: this.editFormGroup.get('cardNumber')!.value,
      cvv: this.editFormGroup.get('cvv')!.value,
      cardType: this.editFormGroup.get('cardType')!.value,
      expDate: this.editFormGroup.get('expDate')!.value,
      bank: this.editFormGroup.get('bank')!.value,
      card1: card1,
      card2: card2,
      card3: card3,
      card4: card4,
    };

    this.editedCard.emit(editedCard);
  }
}
