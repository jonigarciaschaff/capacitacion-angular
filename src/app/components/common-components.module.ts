import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    BackComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BackComponent,
    TitleComponent
  ]
})
export class CommonComponentsModule { }
