import { Component } from '@angular/core';

@Component({
  selector: 'app-year-pipe',
  template: `
      {{today | date:'y'}}
`
})
export class YearPipeComponent {
  public today: number = Date.now();
}
