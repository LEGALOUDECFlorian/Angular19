import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

///////// chapter 4 - 1 ere partie \\\\\\\\\\\\\\\\\\\\\\\\
// @Component({
//   selector: 'app-enfant',
//   imports: [],
//   template: `<h1>Composant Enfant !</h1>`,
//   styles: `
//     :host {
//     color: purple
//     display: flex 
//    }
//     :host-context(.lol) h1 {
//       font-size: 3rem;
//     }
//   `
// })
// export class EnfantComponent {

// }

///////// chapter 4 - 2 eme partie \\\\\\\\\\\\\\\\\\\\\\\\
@Component({
  selector: 'app-enfant',
  imports: [FormsModule],
  template: `
      <input type="text" [(ngModel)]="backgroundColor" />
    <h1 
      [style]="styles" 
      [style.textDecoration]="'underline'"
      [style.backgroundColor]="backgroundColor">Composant Enfant !</h1>
      
    <hr>

    <button (click)="updateActive(true)">Activer h2</button>
    <button (click)="updateActive(false)">Désactiver h2</button>
    <h2 [class.active]="isActive">Composant Enfant !</h2>  
      `,
  styles: `
  .active {
    color:blue;
  }`
})
export class EnfantComponent {

  isActive = false;

  backgroundColor = 'black';
  styles = {
    color: 'blue',
    backgroundColor: this.backgroundColor
  }

  updateActive(isActive: boolean) {
    this.isActive = isActive;
  }
}
