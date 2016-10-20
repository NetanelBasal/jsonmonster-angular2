import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module',
    pathMatch: 'full'
  },
  {
    path: 'create-api',
    loadChildren: 'app/modules/create-api/create-api.module'
  },
  {
    path: 'docs',
    loadChildren: 'app/modules/docs/docs.module'
  },
  {
    path: 'projects',
    loadChildren: 'app/modules/projects/projects.module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class JsonmonsterRoutingModule {
}
