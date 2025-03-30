import { Component, computed, effect, input, output, signal } from '@angular/core';
import { TodoComponent } from './todo.component';
import { Todo } from '../shared/interfaces';
import { TodoFilterComponent } from "./todo-filter.component";

@Component({
  selector: 'app-todos-list',
  imports: [TodoComponent, TodoFilterComponent],
  template: `
    <hr />

   <app-todo-filter [filter]="filter()" (filterChange)="filter.set($event)" />  <!-- === <app-todo-filter [(filter)]="filter()" /> -->

   <hr />
    <p>Nombre de todo: {{ nbrOfFilterdTodos() }}</p>
    <hr />
    <ul class="flex flex-col gap-12">
      @for (todo of filteredTodoList(); track todo.id) {
        <!-- @for (todo of mytodos(); track todo.id) {   // Option 2  -->   
        <app-todo (toggleTodo)="toggleTodo.emit($event)" [todo]="todo" />
      } @empty {
        <li>Il n'y a pas de todo pour l'instant</li>
      }
    </ul>
  `,
  styles: `ul {margin-top: 12px;}`
})
export class TodosListComponent {
  filter = signal<string>('');

  // mytodos = input<Todo[]>([], { alias: 'todoList'});
  todosList = input<Todo[]>([]);
  nbrOfFilterdTodos = computed(() => this.filteredTodoList()?.length);
  filteredTodoList = computed(() => 
    this.todosList().filter( t  => t.name.toLowerCase().includes(this.filter()))
  );
  toggleTodo = output<string>();


















  // Possibilité d'ajouter des élements aux données récupérées avec transform:  Option 2 --> 
  // // todosList = input([], {
  //   transform: this.addProp,
  //  });

  //  addProp(todoLists: Todo[]) {
  //   return todoLists.map((t) => ({ ...t, new: true}));
  //  }

  // effect() pour debugger ou vérifier que les infos arrivent bien
  constructor() {
    effect(() => {
      console.log(this.todosList());
      // console.log(this.mytodos());
    });
  }
}
