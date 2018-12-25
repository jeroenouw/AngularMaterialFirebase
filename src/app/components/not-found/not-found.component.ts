import { Component } from '@angular/core';

@Component({
  template: `
    <div id="content">
      <mat-card>
          <h1>Page not found 404</h1>
            The page you're looking for doesn't exist, please return to the <a routerLink="/home">homepage</a>.
      </mat-card>
   </div>
`,
  styles: ['#content { padding: 20px;}']
})

export class PageNotFoundComponent {}
