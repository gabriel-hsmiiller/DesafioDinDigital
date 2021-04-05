import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonStyle: string = '';
  @Input() height: number = 0;
  @Input() hasBg: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
