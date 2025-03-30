import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DynamicColorService {
  color = signal<string>('black');

  updateColor(newColor: string) {
    const colors: Record<string, string> = {
      rouge: 'red',
      bleu: 'blue',
      vert: 'green',
      jaune: 'yellow',
      noir: 'black',
      blanc: 'white',
      gris: 'gray',
    };

    this.color.set(newColor in colors ? colors[newColor] : newColor);
  }
}
