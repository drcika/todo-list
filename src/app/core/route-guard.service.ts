import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private httpService: HttpService, private router: Router) { }

  canActivate() {
    if (this.httpService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
