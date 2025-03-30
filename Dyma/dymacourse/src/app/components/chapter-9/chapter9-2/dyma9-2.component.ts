import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-dyma9-2',
  imports: [CardComponent],
  template: `
  <p>coucou</p>
  <app-card>
    <!-- <h1 class="title">Article sur quelque chose</h1> -->
    <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, repellat natus? Animi est doloribus repellendus tempore commodi veritatis dicta facere, labore voluptates incidunt, molestiae illo cumque nisi vel libero dolore!</p>
  </app-card>

  <app-card>
    <h1 class="title">Article sur quelque chose d'autre</h1>
    <button>Ajouter</button>
  </app-card>
  `,
  styles: ``
})
export class Dyma92Component {

}
