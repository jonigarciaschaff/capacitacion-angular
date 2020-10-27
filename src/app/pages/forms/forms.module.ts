import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    AngularFormsModule,
    ReactiveFormsModule,
    CommonComponentsModule
  ]
})
export class FormsModule { }
