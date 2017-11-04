import { Component, OnInit, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  template: `
    <h3>
      Change Detection :
    </h3>
    <button mat-raised-button (click)="OnMutate()">Mutate</button>
    <button mat-raised-button (click)="OnChange()">Change</button>
    <br/><br/>
    <pre class="source">{{change2 | json}}</pre>
    <app-change-detail [course]="change1"></app-change-detail>
  `,
  styles: [`.source {
      background-color: #ccc
      }`]
})
export class ChangeDetectionComponent implements OnInit {

  change1: any;
  change2: any;

  ngOnInit() {
    this.change1 = {title: 'Learning Angular', author: 'Person'};
    this.change2 = this.change1;
  }

  OnMutate() {
    console.log('OnMutate');
    this.change1.title = 'Learning Angular 5';
    this.change1.author = 'Person A';
  }

  OnChange() {
    console.log('OnChange');
    this.change1 = {title: 'Learning React', author: 'Person B'};
    this.change2 = this.change1;
  }


}
