import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';
import {  TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = '這是一個練習Router的範例';

   
   name = 'Angular';
   data:string[];
   editdata:Message;
   getdata(mess: Message){

   }



  title = 'todo-list';
  // todoList = [
  //   {title: 'install NodeJS'},
  //   {title: 'install Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'},
  // ];


  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];



  addItem(title: string) {    
    this.todoList.push({ title });
  }

  //  removeItem(item) {
  //   this.todoListService.deleteItem(item);
  // }

  // updateItem(item, changes) {
  //   this.todoListService.updateItem(item, changes);
  // }

   //需與interface 格式一樣 
  //  todoItem: TodoItem [] =[
  //    {
  //      id:1,
  //      value:'todo item 1',
  //      done :false
  //    },
  //    {
  //     id:2,
  //     value:'todo item 2',
  //     done :false
  //   },
  //   {
  //     id:3,
  //     value:'todo item 3',
  //     done :false
  //   }

  //  ]



}
