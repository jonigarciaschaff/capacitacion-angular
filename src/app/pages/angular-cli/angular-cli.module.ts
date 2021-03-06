import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCliRoutingModule } from './angular-cli-routing.module';
import { AngularCliComponent } from './angular-cli.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [AngularCliComponent],
  imports: [
    CommonModule,
    AngularCliRoutingModule,
    CommonComponentsModule
  ]
})
export class AngularCliModule { }
