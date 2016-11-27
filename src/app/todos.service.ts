import { Injectable } from '@angular/core';
import { Todo } from './todo.ts';

@Injectable()
export class TodosService {

  todos: Todo[] = [
    {userId: 1, id: 1, title: 'Make this 1', completed: true},
    {userId: 1, id: 2, title: 'Make this 2', completed: true},
    {userId: 2, id: 3, title: 'Make this 3', completed: true},
    {userId: 3, id: 4, title: 'Make this 4', completed: true}
  ];

  getTodos(): Todo[] { 
    return this.todos;
  }

}
