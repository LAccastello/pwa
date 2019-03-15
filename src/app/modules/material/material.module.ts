import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
