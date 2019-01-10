import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './todo/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './todo/list/list.component';

@NgModule({
  declarations: [
    TodoComponent,
    TaskComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
