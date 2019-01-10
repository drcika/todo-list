import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AuthenticationComponent } from './authentication/authentication.component';


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
  ]
})
export class CoreModule { }
