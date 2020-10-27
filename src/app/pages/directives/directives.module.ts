import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { LogDirective } from './log/log.directive';
import { ChangeColorDirective } from './change-color/change-color.directive';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [DirectivesComponent, LogDirective, ChangeColorDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    CommonComponentsModule
  ]
})
export class DirectivesModule { }
