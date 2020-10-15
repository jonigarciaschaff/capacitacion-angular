import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
    },
    {
        path: 'angular-cli',
        loadChildren: () => import('./angular-cli/angular-cli.module').then(module => module.AngularCliModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutesModule {
}