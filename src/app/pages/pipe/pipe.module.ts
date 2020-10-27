import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeRoutingModule } from './pipe-routing.module';
import { PipeComponent } from './pipe.component';
import { MultiplicatePipe } from './mutiplicate/multiplicate.pipe';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [PipeComponent, MultiplicatePipe],
  imports: [
    CommonModule,
    PipeRoutingModule,
    CommonComponentsModule
  ]
})
export class PipeModule { }
