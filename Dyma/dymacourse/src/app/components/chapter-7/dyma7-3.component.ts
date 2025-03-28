import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-dyma7-3',
  imports: [],
  template: `
    <button (click)="incCount()">+1</button>
    <p>-----------------------------------------</p>
    <h1>Compteur : {{ compteur() }}</h1>
    <button (click)="incrementer()">+1</button>
    <button (click)="decrementer()">-1</button>
  `,
  styles: ``
})
export class Dyma73Component {
  count = signal(0);

  incCount() {
    this.count.update((c) => ++c);
  }

  myEffect = effect(() => {
    console.log('in effect: ', this.count());
  });

  ref = effect((cleanUp) => {
    const refTimeout = setTimeout(() => {
      console.log(this.count());
    }, 5000);

    cleanUp(() => {
      clearTimeout(refTimeout);
    });
  });

  // ------------------------------------------------------------------------ \\

  compteur = signal(0);

  constructor() {
    effect(() => {
      console.log(`La valeur du compteur a changé : ${this.compteur()}`);
    });
  }

  incrementer() {
    this.compteur.update((val) => val + 1);
  }

  decrementer() {
    this.compteur.update((val) => val - 1);
  }
}
