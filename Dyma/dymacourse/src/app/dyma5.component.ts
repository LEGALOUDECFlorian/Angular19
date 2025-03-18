import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma5',
  imports: [],
  template: `<h1>Dyma</h1>`,
  styles: ``,
  host: {
    '[class]': "isActive ? 'active' : '' ",
    '(click)': 'test()',
    role: 'tab'
  }
})
export class Dyma5Component {
  isActive = true;

  test() {
    console.log("enfant");
  }
}
