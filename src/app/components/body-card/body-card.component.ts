import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from 'src/app/models/card-item';

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.scss']
})
export class BodyCardComponent implements OnInit {

  @Input() card: CardItem;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
