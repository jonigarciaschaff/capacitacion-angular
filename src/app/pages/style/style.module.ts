import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleRoutingModule } from './style-routing.module';
import { StyleComponent } from './style.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [StyleComponent],
  imports: [
    CommonModule,
    StyleRoutingModule,
    CommonComponentsModule
  ]
})
export class StyleModule { }
