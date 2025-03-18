import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma3',
  imports: [],
  template: ` <div (mouseenter)="displayHi()" class="square" (click)="exemple($event, 'Hi')">{{title}}</div>`,
  styles: `.square { height: 200px; width: 200px; background-color:red}`
})
export class Dyma3Component {
  title = "";

  exemple(event: MouseEvent, title: string) {
    console.log(event);
    console.log(title);
  }

  displayHi() {
    this.title = "Hi";
  }
}
