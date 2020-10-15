import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCliComponent } from './angular-cli.component';


const routes: Routes = [
  {
    path: '',
    component: AngularCliComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCliRoutingModule { }
