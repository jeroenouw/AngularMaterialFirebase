import { Component } from '@angular/core';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.css']
})
export class FirstBlockComponent {
  titleOne: string = 'First Content Title';
  contentOne: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';

}
