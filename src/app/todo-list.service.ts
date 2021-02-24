import { Injectable } from '@angular/core';
import {TodoItem} from './shared/todo-item';
import { StorageService } from './storage.service';



const todoListStorageKey = 'Todo_List';

const todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  
  constructor( private storageService : StorageService) { 
    //this.todoList = storageService.getData(todoListStorageKey)|| defaultTodoList;
    this.todoList = storageService.getData(todoListStorageKey)|| todoList;
  
  }

  getTodoList(){
    return this.todoList;
  }

  addItem(item: TodoItem){
    this.todoList.push(item);
    //this.storageService.setData(todoListStorageKey, this.todoList);
    this.saveList();
  }

  
  updateItem(item:TodoItem, changes){
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item , ...changes};
    //his.storageService.setData(todoListStorageKey, this.todoList);
    this.saveList();
  }

  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  
  deleteItem(item: TodoItem){
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index,1);
    this.saveList();
  }

}
