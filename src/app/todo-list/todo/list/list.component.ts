import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  tasks: any;

  ngOnInit() {
    this.httpService.fetchTasks();
    this.httpService.tasksSubs.subscribe(tasks => this.tasks = tasks);
  }

}
