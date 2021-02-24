import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  //templateUrl: './input-button-unit.component.html',
  template: `
  <input #inputElementRef [value]="title" (keyup.enter)="submitValue($event.target.value)">

  <button (click)="submitValue(inputElementRef.value)">
    Save
  </button>
`,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Input() title;   //滅少錯誤，不確定是否加入
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
