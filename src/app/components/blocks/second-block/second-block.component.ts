import { Component } from '@angular/core';

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.css']
})
export class SecondBlockComponent {
  titleTwo: string = 'Second Content Title';
  contentTwo: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
    
}
