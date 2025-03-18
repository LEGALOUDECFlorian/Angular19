import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma2',
  imports: [],
  template: ` <input [type]="inputType">`,
  styles: ``
})
export class Dyma2Component {

  inputType = "date";

  constructor() {
    setTimeout(() => {
      this.inputType = "number";
    }, 3000);
  }
}
