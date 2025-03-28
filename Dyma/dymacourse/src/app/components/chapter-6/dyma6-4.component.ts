import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma6-4',
  imports: [],
  template: `
    @let greeting = 'Bonjour ' + name;

    <h1>{{greeting}}</h1>
    <hr>
    @let a = b;
    
    <button (click)="(b = b + 1)">+1</button>
    <h2>{{ a }}</h2>

    <hr>
    <button (click)="test(moninput)">test</button>
    <input type="text" #moninput />
    {{ moninput.value }}
  `,
  styles: ``
})
export class Dyma64Component {
  name = 'Louis';
  b = 0;
  test(moninput: HTMLInputElement) {
    console.log(moninput.value)
  };
}
