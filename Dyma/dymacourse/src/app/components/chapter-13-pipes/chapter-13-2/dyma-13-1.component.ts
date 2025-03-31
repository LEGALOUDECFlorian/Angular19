import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HidePipe } from './shared/pipes/hide.pipe';

@Component({
  selector: 'app-dyma-13-2',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DecimalPipe, JsonPipe, CurrencyPipe, DatePipe, HidePipe],
  template: `
  <h1>{{ password | hide : 2 }}</h1>
   <h1>{{ today | date: 'EEEE d MMMM YY' }}</h1>
   <h1>{{ price | currency: 'EUR' }}</h1>    <!-- ISO 4217 pour les code pays  -->
   <h1>{{ name | uppercase }}</h1>
   <h1>{{ name | uppercase | lowercase }}</h1>
   <h1>{{ name | titlecase }}</h1>
   <h1>{{ result | number: '1.0-2' }}</h1> 
   <pre>{{ user | json }}</pre> 
  `,
  styles: ``
})
export class Dyma132Component {
  password = '12345';
  today = new Date();
  price = 50;
  name = 'louis';
  result = 1 / 3;
  user = {
    local: {
      email: 'test@gmail.com',
    },
    city : {
      name: 'Paris',
    },
  };

  constructor() {
    console.log(navigator.language) // connaître la langue du navigateur 
  }
}
