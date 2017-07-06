import { Component } from '@angular/core';

@Component({
  selector: 'app-third-block',
  templateUrl: './third-block.component.html',
  styleUrls: ['./third-block.component.scss']
})
export class ThirdBlockComponent  {
  titleThree: string = 'Angular 4';
  contentThree: string = 'Angular is a framework for building client applications in HTML and TypeScript that compiles to JavaScript.';

  titleFour: string = 'Material 2';
  contentFour: string = 'Material Design is a unified system that combines theory, resources, and tools for crafting digital experiences.';

  titleFive: string = 'Firebase';
  contentFive: string = 'Firebase is built on Google infrastructure and scales automatically, for even the largest apps.';
}
