import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todtoText = "可以動態呈現輸入的字";
  placeholderText =" ----plase input itmes";

  delTodo($event){

    this.todtoText = "";
  }

  addTodo($event){

    console.log("button is click", $event);
  }

  changeTodoText($event){
    this.todtoText = ($event.target as HTMLInputElement).value;
  }
}
