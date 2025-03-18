import { Component, ViewEncapsulation } from '@angular/core';
import { EnfantComponent } from "./enfant.component";

///////// chapter 4 - 1 ere partie \\\\\\\\\\\\\\\\\\\\\\\\
// @Component({
//   selector: 'app-parent',
//   imports: [EnfantComponent],
//   template: `<h1>Composant Parent !</h1>
//              <div class="lol">
//              <app-enfant/>
//              </div>
//              `,
//   styles: `
//   h1 {
//     color: red;
//   }`,
// })
// export class ParentComponent {

// }

///////// chapter 4 - 2 eme partie \\\\\\\\\\\\\\\\\\\\\\\\
@Component({
  selector: 'app-parent',
  imports: [EnfantComponent],
  template: `<h1>Composant Parent !</h1>
             <div class="lol">
             <app-enfant/>
             </div>
             `,
  styles: `
  h1 {
    color: red;
  }`,
})
export class ParentComponent {

}
