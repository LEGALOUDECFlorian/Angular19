import { Component } from '@angular/core';
import { FormComponent } from "./form.component";
import { ListComponent } from "./list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dyma-11-3',
  imports: [FormComponent, ListComponent],
  template: `
    <app-form />

    <app-list />
  `,
  styles: ``
})
export class Dyma113Component {

}
