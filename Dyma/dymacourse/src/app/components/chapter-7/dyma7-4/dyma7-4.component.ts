import { Component, computed, effect, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  lang: string[];
}


@Component({
  selector: 'app-dyma7-4',
  imports: [FormsModule],
  template: `
   <select [ngModel]="selectedProduct()" (ngModelChange)="selectedProduct.set($event)">
   <option [value]="null">Chose a product</option>
   @for (product of products(); track product.name) {
    <option [ngValue]="product">{{ product.name }}</option>
   }
   </select>
   <hr/>
   <input 
   [ngModel]="quantity()" 
   (ngModelChange)="quantity.set($event)"
   type="number" />
   <hr/>
   @if (this.selectedProduct()) {
     <select 
       [ngModel]="selectedLang()" 
       (ngModelChange)="selectedLang.set($event)">
     <option [value]="null">Chose a lang</option>
     @for (lang of this.selectedProduct()?.lang; track $index) {
      <option [ngValue]="lang">{{ lang }}</option>
     }
     </select>
   }
   <hr/>
   <h1>Prix : {{ price() }}</h1>
  `,
  styles: ``
})
export class Dyma74Component {
  products = signal<Product[]>([
    {
      name: 'Cz Shadow 2',
      price: 1800,
      lang: ['fr', 'en'],
    },
    {
      name: 'Glock 17',
      price: 600,
      lang: ['es', 'en'],
    },
  ]);

  selectedProduct = signal<Product | null>(null);
  //selectedLang = signal<string | null>(null);
  selectedLang = linkedSignal(() => {
    return this.selectedProduct()?.lang[0]
  });
 // syntaxe plus propre : 
 //   selectedLang = linkedSignal(() => this.selectedProduct()?.lang[0]);


  // quantity = signal(1); // exemple pour mise à jour via signal()
  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: (newProduct) => {
      console.log({ newProduct });
      return 1;
    },
  });
  // syntaxe plus propre : 
  //   quantity = linkedSignal({
  //   source: this.selectedProduct,
  //   computation: () => 1, 
  // });



  price = computed(() => (this.selectedProduct()?.price || 0) * this.quantity());

  // effect() peux sérvir à débugger  
  // constructor() {
  //   effect(() => {
  //     console.log(this.selectedProduct());
  //     console.log(this.quantity());
  //   })
  // }
}
