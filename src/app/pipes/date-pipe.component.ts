import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  template: `
  <div>
      <fieldset>
        {{today | date:'d'}}-{{today | date:'M'}}-{{today | date:'y'}}
        <!--<p>A alternative, {{today | date:'medium'}}</p>-->
      </fieldset>
  </div>
`,  
  //styles: ['p {font-weight: bold; }']

})
export class DatePipeComponent {
  today: number = Date.now();
}