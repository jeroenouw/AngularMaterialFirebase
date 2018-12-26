import { Component } from '@angular/core';

@Component({
  selector: 'app-titlecase-pipe',
  template: `
          {{message | titlecase}}
  `
})
export class TitleCasePipeComponent {
  public message = 'angular material firebase';

}
