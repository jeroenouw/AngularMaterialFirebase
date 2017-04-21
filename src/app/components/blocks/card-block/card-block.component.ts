import { Component } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent {
  titleCard: string = 'Angular';
  numberCard: number = 4;
  subTitleCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  contentCard: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  angularImage: string;

  constructor() {
    this.angularImage = '/assets/img/angular2.png'; }

}
