import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe',
  template: `
    <div>
      <fieldset>
          {{message|titlecase}}
      </fieldset>
    </div>
  `,
  styles: []
})
export class TitleCasePipeComponent implements OnInit {
   message: string='angular 4 material design';
  constructor() { }

  ngOnInit() {
  }

}
