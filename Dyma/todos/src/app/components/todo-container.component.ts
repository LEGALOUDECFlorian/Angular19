import { Component, computed, inject, signal } from '@angular/core';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';
import { Todo, TodoForm } from '../shared/interfaces';
import { TodosService } from '../shared/services/todos.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-container',
  imports: [TodoFormComponent, TodosListComponent, JsonPipe],
  template: `
   <app-todo-form (addTodo)="addTodo($event)"/>
   <app-todos-list 
     (toggleTodo)="toggleTodo($event)" 
     (selectTodo)="selectTodo($event)"
     [todosList]="todosList()"
   />
   <!-- <pre>{{ selectTodo() | json }}</pre> -->
  `,
  styles: `
    :host {
      padding: 32px;
    }
  `
})
export class TodoContainerComponent {

  todosService = inject(TodosService);
  todosList = computed(() => this.todosService.todosResource.value() || []);
  

  ///  exemple d'utilisation simple deconseillé\\\
  // async ngOnInit() {
  //   const list = await (await fetch('https://restapi.fr/api/atodos')).json();
  //   this.todosList.set(list);
  // }

  addTodo(todo: TodoForm) {
    this.todosService.addTodo(todo);
  }

  selectTodo(todoId: string) {
    this.todosService.selectTodo(todoId);
  }

  toggleTodo(todoId: string) {
   
  }
}
