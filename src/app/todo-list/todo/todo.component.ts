import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit() {
  }

}
