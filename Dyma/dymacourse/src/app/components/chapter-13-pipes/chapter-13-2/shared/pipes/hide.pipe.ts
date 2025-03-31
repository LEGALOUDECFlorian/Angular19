import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide',
  // pure: false   // Ajouter pure si besoin de ré-évaluation de la données transmise au pipe
})
export class HidePipe implements PipeTransform {

  transform(value: string, cut = 0): string {
    const hide = cut ? cut : value.length;
    return new Array(hide + 1).join('*') + value.slice(hide, value.length);
  }

}
