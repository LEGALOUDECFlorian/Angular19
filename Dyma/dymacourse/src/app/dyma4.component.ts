import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-dyma4',
//   imports: [],
//   template: ` 
//     <input type="text" (input)="updateTitle($event)"/>
//     <br>
//     <p>{{title}}</p>`,
//   styles: ``
// })
// export class Dyma4Component {
//   title = "";

//   updateTitle(event: Event) {
//     const { value } = (event.target as HTMLInputElement);
//     this.title= value;
//   }
// }

@Component({
  selector: 'app-dyma4',
  imports: [FormsModule],
  template: ` 
    <input type="text" [(ngModel)]="title"/>
    <br>
    <p>{{title}}</p>`,
  styles: ``
})
export class Dyma4Component {
  title = "";
}