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

  // banksLogos = [
  //   {
  //     bankName: 'SBI',
  //     logo: 'https://www.freepnglogos.com/uploads/sbi-logo-png/image-sbi-logo-logopedia-fandom-powered-wikia-0.png',
  //   },
  //   {
  //     bankName: 'ICICI',
  //     logo: 'https://companieslogo.com/img/orig/IBN_BIG-9ec25662.png?t=1648383607',
  //   },
  //   {
  //     bankName: 'HDFC',
  //     logo: 'https://logodix.com/logo/840255.png',
  //   },
  // ];

  // cardsTypeLogos = [
  //   {
  //     cardName: 'VISA',
  //     logo: 'https://www.freepnglogos.com/uploads/visa-card-logo-9.png',
  //   },
  //   {
  //     cardName: 'Rupay',
  //     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/800px-Rupay-Logo.png?20200811062726',
  //   },
  //   {
  //     cardName: 'Master',
  //     logo: 'https://www.mastercard.com/news/media/b5zamlev/mc_symbol_white.png?anchor=center&mode=crop&width=960&rnd=132530899096970000',
  //   },
  // ];

  newCardForm: boolean = false;
  editCardForm: boolean = true;

  selectedCard: any;

  constructor(public _route: Router) {}

  ngOnInit() {}

  // getBankLogo(bankName: string): any {
  //   console.log('In getBankLogo bankName: ', bankName);
  //   let logo;
  //   this.banksLogos.forEach((ele) => {
  //     if (ele.bankName == bankName) {
  //       console.log('Card Found: ', ele);
  //       logo = ele.logo;
  //     }
  //   });
  //   return logo;
  // }

  // getCardTypeLogo(cardType: string): any {
  //   let logo;
  //   this.cardsTypeLogos.forEach((ele) => {
  //     if (ele.cardName == cardType) {
  //       logo = ele.logo;
  //     }
  //   });
  //   return logo;
  // }

  editCard(card: any) {
    this.selectedCard = card;
    console.log(this.selectedCard);
  }
}
