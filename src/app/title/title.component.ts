import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../shared/todo-item';

@Component({
  selector: 'app-title',
  //templateUrl: './title.component.html',
  template: `
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
