import { Component, signal } from '@angular/core';
import { Dyma93EnfantComponent } from './dyma9-3-enfant.component';

@Component({
  selector: 'app-dyma9-3',
  imports: [Dyma93EnfantComponent],
  template: `
    <!-- Affiche le composant enfant uniquement si test() est true -->
    @if (test()) {
      <app-dyma9-3-enfant />
    }
  `,
  styles: ``
})
export class Dyma93Component {
  // Signal réactif : permet de déclencher une réévaluation du DOM quand sa valeur change
  test = signal(true);

  // Petite fonction utilitaire pour loguer avec couleur
  private log(msg: string, color = 'darkblue') {
    console.log(`%c${msg}`, `color: ${color}; font-weight: bold`);
  }

  constructor() {
    this.log('👨‍👩‍👧 Dyma93Component constructor');

    // Après 3 secondes, on change le signal : test = false
    // Cela retire le composant enfant du DOM
    setTimeout(() => {
      this.log('⏱ test = false → suppression du composant enfant', 'crimson');
      this.test.set(false);
    }, 3000);
  }
}
