import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { AddFormComponent } from './add-form/add-form.component';
import { TodoItmeComponent } from './todo-itme/todo-itme.component';

import { FormsModule } from '@angular/forms';
import { TodoListService } from './todo-list.service';

import { StorageService } from './storage.service';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItmeComponent,
    InputButtonUnitComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ TodoListService , StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
