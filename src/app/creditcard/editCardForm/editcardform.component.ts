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

  user: any;
  constructor() {}

  editFormGroup!: FormGroup;

  ngOnInit() {
    // getting all the data of the current logged user
    let userData = localStorage.getItem('currentUser');
    this.user = userData ? JSON.parse(userData) : {};

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

    const editCard = {
      account: this.user.account,
      cardNumber: this.editFormGroup.get('cardNumber')!.value,
      cvv: this.editFormGroup.get('cvv')!.value,
      cardType: this.editFormGroup.get('cardType')!.value,
      expDate: this.editFormGroup.get('expDate')!.value,
      bank: this.editFormGroup.get('bank')!.value,
    };

    this.editedCard.emit(editCard);
  }
}
