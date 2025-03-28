import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dyma7-1',
  imports: [],
  template: `
   <h1>{{ title() }}</h1>
  `,
  styles: ``
})
export class Dyma71Component {
  title = signal('Hello');

  constructor() {
    setTimeout(() => {
     // this.title.set('world !');
     this.title.update((oldValue) => {
      return oldValue + ' world !';
     });
    }, 3000);
  }
}
