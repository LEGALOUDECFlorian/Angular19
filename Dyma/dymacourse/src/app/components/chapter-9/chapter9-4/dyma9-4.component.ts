import { Component } from '@angular/core';
import { AComponent } from "./a.component";

@Component({
  selector: 'app-dyma9-4',
  imports: [AComponent],
  template: `
    <p>test</p>
    @defer {
      <app-a />
    } @loading (minimum 1s) {
      <h1>loading ...</h1>
    }
     <!-- @placeholder (minimum 1s) {
      <h1>placeholder</h1>
    } -->
  `,
  styles: ``
})
export class Dyma94Component {

}
