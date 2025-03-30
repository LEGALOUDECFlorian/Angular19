import { Component } from '@angular/core';
import { InputDirective } from './shared/directives/input.directive';
import { DynamicColorDirective } from './shared/directives/dynamic-color.directive';

@Component({
  selector: 'app-dyma-12-1',
  imports: [InputDirective, DynamicColorDirective],
  template: `
    <input hello="hello" [appInput]=false type="text">

    <hr/>

  <input appDynamicColor placeholder="Saisissez une couleur (en français ou en anglais)" />
  <p appDynamicColor>
    Ce texte changera de couleur en fonction de votre saisie.
  </p>
  `,
  styles: ``
})
export class Dyma121Component {

}
