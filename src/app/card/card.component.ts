import { Component, OnInit, Input } from '@angular/core';

interface CreditCard {
  cardnumber: number;
  bank: string;
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

  SBI : string = 'https://www.freepnglogos.com/uploads/sbi-logo-png/image-sbi-logo-logopedia-fandom-powered-wikia-0.png';

  ICICI : string = 'https://companieslogo.com/img/orig/IBN_BIG-9ec25662.png?t=1648383607';

  HDFC : string = 'https://logodix.com/logo/840255.png';

  constructor() {}

  ngOnInit() {}
}
