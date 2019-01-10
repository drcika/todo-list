import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  @ViewChild(FormGroupDirective) resetForm: FormGroupDirective;

  addNewTask: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addNewTask = new FormGroup({
      task: new FormControl('', Validators.required)
    });
  }

  onAddNewTask() {
    this.httpService.addTask(this.addNewTask.value.task)
    this.resetForm.resetForm();
  }
}
