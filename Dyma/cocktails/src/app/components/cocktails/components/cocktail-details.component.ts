import { Component } from '@angular/core';
import { Cocktail } from 'app/shared/interfaces';


@Component({
  selector: 'app-cocktail-details',
  imports: [],
  template: `
  <img class="mb-20" [src]="cocktail.imageUrl"/>
   <h3 class="mb-20">{{ cocktail.name }}</h3>
   <p class="mb-20">{{ cocktail.description }}</p>
   <div>
     <button class="btn btn-primary">Ajouter cocktail</button>
   </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    imageUrl: 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
    name: 'Mojito',
    description: `Rafraîchissant, pétillant et subtilement acidulé, le Mojito est une véritable invitation à l’évasion. Ce classique venu de Cuba marie à la perfection le rhum blanc, 
    le citron vert, la menthe fraîche, le sucre de canne et l’eau gazeuse. Chaque gorgée offre un équilibre parfait entre douceur et fraîcheur, relevé par l’arôme enivrant de la menthe. 
    Idéal pour l’été, mais irrésistible toute l’année, le Mojito est le compagnon idéal des moments de détente.`,
  }
}
