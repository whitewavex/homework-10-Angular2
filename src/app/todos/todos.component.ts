import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {

  todos =this.ts.getTodos();

  constructor(
    private ts:TodosService
  ) { }

  ngOnInit() {
    
  }

}
