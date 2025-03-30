import { Component, effect, ElementRef, signal, viewChild, viewChildren } from '@angular/core';
import { FruitComponent } from './fruit.component';

@Component({
  selector: 'app-dyma9-1',
  imports: [FruitComponent],
  template: `
    <input #myinput type="text" />
    
    <button (click)="addFruit()">Add</button>
    <app-fruit/>
    <app-fruit/>
    <app-fruit/>
    <app-fruit/>
    <ul>
      @for (fruit of fruits(); track $index) {
        <li #li>{{ fruit }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class Dyma91Component {
  myinput = viewChild<ElementRef<HTMLInputElement>>('myinput');
  fruit = viewChild(FruitComponent);
  lis = viewChildren<ElementRef<HTMLLIElement>[]>('li');
  fruitsRef = viewChildren(FruitComponent);

  fruits = signal(['fraise', 'pomme']);
  addFruit() {
    const fruit = this.myinput()?.nativeElement?.value;
    if (fruit) {
      this.fruits.update(fs => [...fs, fruit]);
      this.myinput()!.nativeElement!.value = '';
    }
  };

  constructor() {
    effect(() => {
      console.log("this.myinput():",this.myinput());
      console.log("this.fruit():",this.fruit());
      console.log("this.lis():",this.lis());
      console.log("this.fruitsRef():",this.fruitsRef());
    })
  }
}
