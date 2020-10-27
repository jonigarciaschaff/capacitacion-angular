import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    HttpRoutingModule,
    CommonComponentsModule
  ]
})
export class HttpModule { }
