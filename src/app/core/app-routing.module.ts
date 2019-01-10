import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { RouteGuardService } from './route-guard.service';
import { TodoComponent } from '../todo-list/todo/todo.component';

const routes: Routes = [
  // { path: 'todo', component: TodoComponent},

  { path: '', component: AuthenticationComponent },
  { path: 'todo', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
