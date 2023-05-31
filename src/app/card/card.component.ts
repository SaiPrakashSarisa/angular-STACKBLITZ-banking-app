import { Component, OnInit, Input } from '@angular/core';

interface CreditCard {
  cardnumber: number;
  card1: number;
  card2: number;
  card3: number;
  card4: number;
  expdate: string;
  type: string;
  cvv: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  creditCard!: CreditCard;

  constructor() {}

  ngOnInit() {}
}
