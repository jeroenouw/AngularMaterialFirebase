import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  template: `
    <div>
      <fieldset>
        <h3>Json Pipe :</h3>
        <p>Without JSON pipe:</p>
        <pre>{{object}}</pre>
        <p>With JSON pipe:</p>
        <pre>{{object | json}}</pre>
      </fieldset>
  </div>
`
})
export class JsonPipeComponent {
  object: Object = {abc: 'test', def: 'test2', nested: {def: 3, numbers: [1, 2, 3, 4, 5]}};
}
