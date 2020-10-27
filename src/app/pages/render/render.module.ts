import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderRoutingModule } from './render-routing.module';
import { RenderComponent } from './render.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [RenderComponent],
  imports: [
    CommonModule,
    RenderRoutingModule,
    CommonComponentsModule
  ]
})
export class RenderModule { }
