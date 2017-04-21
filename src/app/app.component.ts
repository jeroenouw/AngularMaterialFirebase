import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titleOne: string = 'First Content Title';
  contentOne: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  
  titleTwo: string = 'Second Content Title';
  contentTwo: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';

  titleCard: string = 'Angular';
  numberCard: number = 4;
  subTitleCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  contentCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  angularImage: string;

  constructor() {
    this.angularImage = '/assets/img/angular2.png'; }

}
