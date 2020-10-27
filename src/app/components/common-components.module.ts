import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BackComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BackComponent
  ]
})
export class CommonComponentsModule { }
