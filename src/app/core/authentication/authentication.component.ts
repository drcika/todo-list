import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  loginForm: FormGroup;
  user: User;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.httpService.checkIsLogged();
  }

  onLogin() {
    this.user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.httpService.login(this.user);
  }

}
