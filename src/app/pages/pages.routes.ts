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
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then(module => module.DirectivesModule)
    },
    {
        path: 'events',
        loadChildren: () => import('./events/events.module').then(module => module.EventsModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(module => module.FormsModule)
    },
    {
        path: 'git',
        loadChildren: () => import('./git/git.module').then(module => module.GitModule)
    },
    {
        path: 'render',
        loadChildren: () => import('./render/render.module').then(module => module.RenderModule)
    },
    {
        path: 'style',
        loadChildren: () => import('./style/style.module').then(module => module.StyleModule)
    },
    {
        path: 'pipe',
        loadChildren: () => import('./pipe/pipe.module').then(module => module.PipeModule)
    },
    {
        path: 'http',
        loadChildren: () => import('./http/http.module').then(module => module.HttpModule)
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