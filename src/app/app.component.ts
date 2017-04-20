import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titleOne: string = 'First Content Title';
  contentOne: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
  
  titleTwo: string = 'Second Content Title';
  contentTwo: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl ligula.';
}
