import { Component } from '@angular/core';

@Component({
  selector: 'app-third-block',
  templateUrl: './third-block.component.html',
  styleUrls: ['./third-block.component.css']
})
export class ThirdBlockComponent  {
  titleThree: string = 'Third Content Title';
  contentThree: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  
  titleFour: string = 'Fourth Content Title';
  contentFour: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';

  titleFive: string = 'Fifth Content Title';
  contentFive: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';


}
