import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule {}