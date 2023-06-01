import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editcardform',
  templateUrl: './editcardform.component.html',
  styleUrls: ['./editcardform.component.css'],
})
export class EditcardformComponent implements OnInit {
  @Input()
  cardData: any;
  constructor() {}

  ngOnInit() {}

  editFormGroup = new FormGroup({
    cardNumber: new FormControl(''),
    cvv: new FormControl(''),
    cardType: new FormControl(''),
    expDate: new FormControl(''),
    bank: new FormControl(''),
  });
}
