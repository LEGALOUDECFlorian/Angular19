import { Component, effect, input, output } from '@angular/core';
import { Todo } from '../shared/interfaces';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
   <!-- solution plus classic:  -->
   <!-- <li class="flex gap-12 px-12 border">
        <p class="flex-auto">{{ todo()?.name }}</p>
        <input type="checkbox"/>
      </li> -->

  <!-- avec let:  -->
     @let t = todo();
     <li class="flex gap-12 px-12 border">
        <p (click)="selectTodo.emit(todo()._id)" class="flex-auto">{{ t.name }}</p>
        <input 
          (click)="toggleTodo.emit(todo()._id)" 
          type="checkbox" 
          [checked]="t.done"/>
      </li>
  `,
  styles: ``
})
export class TodoComponent {
  
   todo = input.required<Todo>();
   toggleTodo = output<string>();
   selectTodo = output<string>();

 
}
