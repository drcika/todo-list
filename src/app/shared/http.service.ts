import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../core/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  private authenticated: boolean;
  private token = null;
  private toDoTaskUrl = `http://todo.digitalcube.rs/api/todos`;
  private headers = null;

  tasks = new BehaviorSubject<any[]>([]);
  tasksSubs = this.tasks.asObservable();

  isAuth() {
    return this.authenticated;
  }

  checkIsLogged() {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    if (this.token) {
      this.authenticated = true;
      this.headers = new HttpHeaders().set('Authorization', `${this.token.key}`);
      this.headers.set('Access-Control-Allow-Origin', "*");
      this.router.navigate(['/todo']);
    }
  }

  login(authData: User) {
    let url = `http://todo.digitalcube.rs/user/login?`;
    this.http.post(url, authData)
      .subscribe(
        (data: any) => {
          this.authenticated = true;
          this.token = { key: data.token }
          this.headers = new HttpHeaders().set('Authorization', `${this.token.key}`);
          this.headers.set('Access-Control-Allow-Origin', "*");
          localStorage.setItem('currentUser', JSON.stringify({ key: `${data.token}` }));
          this.router.navigate(['/todo']);
        });

  }

  fetchTasks() {
    this.http.get(this.toDoTaskUrl, { headers: this.headers }).subscribe(
      (data: any) => this.tasks.next(data.todos));
  }

  addTask(task: string) {
    this.http.put(this.toDoTaskUrl, { "content": `${task}` }, { headers: this.headers })
      .subscribe((data: any) => this.fetchTasks());

  }

  deleteTask(id: string) {
    this.http.delete(`${this.toDoTaskUrl}/${id}`, { headers: this.headers }).subscribe((data: any) => this.fetchTasks());
  }

  markTaskAsDone(id: string) {
    this.http.patch(`${this.toDoTaskUrl}/${id}`, { "done": true }, { headers: this.headers })
      .subscribe((data: any) => this.fetchTasks());
  }

  logout() {
    const url = `http://todo.digitalcube.rs/user/logout`;
    this.http.post(url, { headers: this.headers });
    localStorage.removeItem('currentUser');
    this.token = null;
    this.authenticated = false;
    this.router.navigate(['/']);
  }

}
