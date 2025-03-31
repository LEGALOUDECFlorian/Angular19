import { Injectable, resource, signal } from '@angular/core';
import { Todo, TodoForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  BASE_URL = 'https://restapi.fr/api/atodos';

  todosResource = resource({
    loader: async (): Promise<Todo[]> => ( await fetch(this.BASE_URL)).json()
  })

  selectedTodoId = signal<string | null>(null);

  // selectedTodoResource = resource({});

  constructor() { }

  selectTodo(todoId: string) {
    console.log(this.selectedTodoId());
    this.selectedTodoId.set(todoId);
  }


  async addTodo(todo: TodoForm) {
    try {
     const response = await fetch(this.BASE_URL, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          'content-type': "application/json"
        },
      });
      const body = await response.json();
      if (response.ok) {
         console.log({body});
      } else {
        throw new Error('Oops');
      }
    } catch (error) {
      throw new Error(`Oops : ${error}`);
    }
  } 
}
