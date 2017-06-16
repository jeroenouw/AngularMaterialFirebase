import { Component } from '@angular/core';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent {
  titleOne: string = 'Starter kit';
  contentOne: string = 'Angular 4 | Material Design | Firebase (0Auth authentication and NoSQL database)';

}
