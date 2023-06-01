import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcardform',
  templateUrl: './newcardform.component.html',
  styleUrls: ['./newcardform.component.css'],
})
export class NewcardformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  newCard = new FormGroup({
    cardNumber: new FormControl(''),
    cvv: new FormControl(''),
    cardType: new FormControl(''),
  });
}
