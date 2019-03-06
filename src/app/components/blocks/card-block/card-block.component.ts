import { Component } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent {
  titleCard = 'Angular';
  numberCard = 8;
  subTitleCard = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  contentCard = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  angularImage: string;

  constructor() {
    this.angularImage = '/assets/img/angular2.png'; }

}
