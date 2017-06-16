import { Component } from '@angular/core';

@Component({
  selector: 'app-second-block',
  templateUrl: './second-block.component.html',
  styleUrls: ['./second-block.component.scss']
})
export class SecondBlockComponent {
  titleTwo: string = 'Authentication and Database';
  contentTwo: string = 'Provided by Firebase';
    
}
