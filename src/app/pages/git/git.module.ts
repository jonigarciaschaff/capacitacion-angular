import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GitRoutingModule } from './git-routing.module';
import { GitComponent } from './git.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [GitComponent],
  imports: [
    CommonModule,
    GitRoutingModule,
    CommonComponentsModule
  ]
})
export class GitModule { }
