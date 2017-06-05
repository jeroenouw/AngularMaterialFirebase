import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  template: `<fieldset>
  <h3>Currency Pipe :</h3>
  <div>
    <p>Angular: {{angularPrice | currency:'EUR':false}}</p>
    <p>Angular 4: {{angular4Price | currency:'EUR':true:'4.2-2'}}</p>
  </div>
</fieldset>`,
  styles: []
})
export class CurrencyPipeComponent implements OnInit {

  angularPrice: number = 0.567;
  angular4Price: number = 1.3743;

  constructor() {
  }

  ngOnInit() {
  }

}
