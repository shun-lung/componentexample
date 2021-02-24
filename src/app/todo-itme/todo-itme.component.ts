import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
//import * as EventEmitter from 'events';
import {TodoItem} from '../shared/todo-item';
import { TodoListService } from '../todo-list.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-todo-itme',
  //templateUrl: './todo-itme.component.html',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-itme.component.css']
  
})
export class TodoItmeComponent implements OnInit {
  
  @Input() item: TodoItem;
  //@Input() todoList: TodoListService;
  @Output() remove: EventEmitter<TodoListService> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  
  todoList: TodoItem[];
  constructor( private todoListService : TodoListService) {
    
   }


   completeItem() {
    this.update.emit({
      item: this.item,
      //changes: {completed: !this.item.completed}
    });
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    
    
  }

 

  addItem(title : string){
    this.todoListService.addItem({ title });
  }

  // removeItem() {
  //   this.remove.emit();
  //   //this.todoListService.deleteItem(item);
  // }


  removeItem(item) {
    this.todoListService.deleteItem(item);
  }

  updateItem(item, changes) {
    this.todoListService.updateItem(item, changes);
  }


}
