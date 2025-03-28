import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dyma7-2',
  imports: [FormsModule],
  template: `
  <input type="text" [(ngModel)]="username">
   <h1>{{ helloInFr() }}</h1>
   <h1>{{ helloInEs() }}</h1>
   <h1>{{ helloInEn() }}</h1>
   <button (click)="reverseShowHello()">show</button>
  `,
  styles: ``
})
export class Dyma72Component {
  username = signal('');
  count = signal(0);
  showHello = signal(false);

  helloInFr = computed(() => {
    if (this.showHello()) {
      return `Bonjour ${this.username()} ${this.count()}`;
    } else {
      return 'bonjour'
    }
  });

  reverseShowHello() {
    this.showHello.update((old) => !old);
  };

  helloInEs = computed(() => {
    return `Hola ${this.username()}`;
  });

  helloInEn = computed(() => {
    return `Hello ${this.username()}`;
  });

 
}
