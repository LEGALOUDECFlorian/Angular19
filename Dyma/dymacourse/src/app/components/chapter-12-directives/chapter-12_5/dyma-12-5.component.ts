import { Component, signal } from '@angular/core';
import { InputDirective } from './shared/directives/input.directive';

@Component({
  selector: 'app-dyma-12-5',
  imports: [InputDirective],
  template: `
    <button (click)="toggle.set(!toggle())">toggle</button>
    <input *appInput="toggle()" type="text" />
  `,
})
export class Dyma125Component {
  toggle = signal(false);
}
