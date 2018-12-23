import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  template: `
        {{today | date:'d'}}-{{today | date:'M'}}-{{today | date:'y'}}
        <!--<p>A alternative, {{today | date:'medium'}}</p>-->
`,
  // styles: ['p {font-weight: bold; }']

})
export class DatePipeComponent {
  public today: number = Date.now();
}
