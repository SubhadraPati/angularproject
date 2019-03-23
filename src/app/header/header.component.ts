import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
  // template:`<div *ngIf="courses.length>0">
  // <h1>courses are here</h1>
  // </div>
  // <div *ngIf="courses.length==0">
  // <h1>No courses are here</h1>
  // </div>`
  // template:`<div *ngIf="courses.length>0;then courseList else nocourse"></div>
  // <ng-template #courseList>
  // <h1>courses are here</h1>
  // </ng-template>
  // <ng-template #nocourse>
  // <h1>No courses are here</h1>
  // </ng-template>`
  // template:`<div [ngSwitch]="color">
  // <p *ngSwitchCase="'red'">Red color is here</p>
  // <p *ngSwitchCase="'blue'">blue color is here</p>
  // <p *ngSwitchCase="'green'">green color is here</p>
  // <p *ngSwitchDefault>no color is here</p>
  // </div>
  // `
  // template:`<button class="btn"[ngClass]="{'btn-success':isSelected,'btn-danger':!isSelected}">Submit
  // </button>`
  template:`<div>pooja</div>
  <div>subhadra</div>
  <div>krishna</div> `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// courses=["java","python","nodejs","angular"]
// color='red';
// isSelected=true;
}
