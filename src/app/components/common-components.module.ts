import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BackComponent,
    TitleComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BackComponent,
    TitleComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CommonComponentsModule { }
