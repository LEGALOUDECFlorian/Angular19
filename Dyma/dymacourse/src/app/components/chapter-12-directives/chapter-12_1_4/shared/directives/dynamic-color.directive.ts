import { Directive, inject, computed } from '@angular/core';
import { ElementRef } from '@angular/core';
import { DynamicColorService } from '../services/dynamic-color.service'; // <-- importe ton service

@Directive({
  selector: '[appDynamicColor]',
  host: {
    '[style.color]': 'textColor()',
  },
})
export class DynamicColorDirective {
  private element = inject(ElementRef);
  private colorService = inject(DynamicColorService);
  textColor = computed(() => this.colorService.color());

  constructor() {
    const el = this.element.nativeElement;

    if (el instanceof HTMLInputElement) {
      // Écoute uniquement si l'élément est un input
      el.addEventListener('input', () => {
        const value = el.value.trim().toLowerCase();
        this.colorService.updateColor(value);
      });
    }
  }
}
