import { Component } from '@angular/core';

@Component({
  selector: 'app-background-empty',
  template: `<div class="background"><br /></div>`,
  styles: [`
  .background {
    position: relative;
    width: 100%;
    height: 500px;
    z-index: 1;
  }`]
})
export class BackgroundEmptyComponent {}
