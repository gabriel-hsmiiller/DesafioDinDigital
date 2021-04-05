import { Component, OnInit } from '@angular/core';

import { CardsService } from './services/cards.service';
import { CardItem } from './models/card-item';
import { DefaultResponse } from './models/default-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  cards: CardItem[];

  constructor(private _cardService: CardsService){ }
  
  ngOnInit(){
    this.cards = [];
    this.getCards();
  }

  getCards() {
    this._cardService.getCards().subscribe((success: DefaultResponse<CardItem>) => {
      console.log(success);
      if(success.items){
        this.cards = success.items;
      }
    }, (error) => {
      console.log(error);
    })
  }

}
