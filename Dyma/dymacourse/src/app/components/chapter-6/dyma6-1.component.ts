import { Component } from '@angular/core';

@Component({
  selector: 'app-dyma6-1',
  imports: [],
  template: `
  @if (user.address.city; as city) {
    <h1>Dans une ville : {{ city }}</h1>
  } @else {
    <h1>error</h1>
  }
  `,
  styles: ``
})
export class Dyma61Component {
  user = {
    address: {
      city: 'Paris',
    },
  };
}
