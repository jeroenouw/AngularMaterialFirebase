import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-pipe',
  template: `
      {{today | date:'y'}}
`,
// styles: ['']
})
export class YearPipeComponent {
  today: number = Date.now();
}
