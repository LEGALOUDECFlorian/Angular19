import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoContainerComponent } from "./components/todo-container.component";

@Component({
  selector: 'app-root',
  imports: [TodoContainerComponent],
  template:`
  <app-todo-container class="container"/>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'todos';
}
