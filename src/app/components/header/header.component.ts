import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeRoute: string = '';
  
  links = [
    {label: 'Home', route: ''},
    {label: 'Product', route: '.'},
    {label: 'FAQ', route: '.'},
    {label: 'Contact', route: '.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
