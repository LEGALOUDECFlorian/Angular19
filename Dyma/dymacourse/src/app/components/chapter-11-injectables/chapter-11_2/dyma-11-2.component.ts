import { Component, inject } from '@angular/core';
import { MY_CONFIG_TOKEN, MyClass } from './shared/dummy';

@Component({
  selector: 'app-dyma-11-2',
  imports: [],
  template: `
    <!-- <p>
      {{myclass.test}}
    </p> -->
  `,
  styles: ``
})
export class Dyma112Component {

  myclass = inject(MyClass);
  myconfig = inject(MY_CONFIG_TOKEN);

  constructor() {
    console.log(this.myclass);
    console.log(this.myconfig);
  }
}
