import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
   <p class="text-sm text-semibold">©Dyma 2025-2026</p>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--gray-700);
      color: white;
      height: 56px;
      padding:0 16px;
    }
  `
})
export class FooterComponent {

}
