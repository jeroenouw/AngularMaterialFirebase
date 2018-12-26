import { Component } from '@angular/core';

@Component({
  selector: 'app-background-slant',
  template: `<div class="background-slant"></div>`,
  styles: [
    `.background-slant {
      position: relative;
      overflow: hidden;
      background-color: #673ab7;
      transform: skew(0,-4deg);
      -webkit-transform: skew(0,-4deg);
      -ms-transform: skew(0,-4deg);
      left: 0px;
      right: 0px;
      height: 520px;
      z-index: 1;
    }
  `]
})
export class BackgroundSlantComponent {}
