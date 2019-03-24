import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 

  navigationlinks: any [] = [
    { name: 'CBSE' },
    { name: 'NCERT Solutions'},
    { name: 'ICSE' },
    { name: 'CAT' },
    { name: 'IAS' },
    { name: 'GMAT' },
    { name: 'GRE' },
    { name: 'JEE' },
    { name: 'NEET' },
    { name: 'COMMERCE' },
    { name: 'STATE BOARDS' }
  ];

  Classes: any [] = [
    { name: 'CLASSES 4 - 10' },
    { name: 'CLASSES 11 - 12'},
    { name: 'TEST Preparation' }
  ];
  constructor() { }

  ngOnInit() {

  }

}
