import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  template: `<fieldset>
  <h3>Currency Pipe :</h3>
  <div>
    <p>Angular: {{angularPrice | currency:'EUR':false}}</p>
    <p>Angular 8: {{angular7Price | currency:'EUR':true:'4.2-2'}}</p>
  </div>
</fieldset>`,
  styles: []
})
export class CurrencyPipeComponent {
  public angularPrice = 0.567;
  public angular7Price = 1.3743;

}
