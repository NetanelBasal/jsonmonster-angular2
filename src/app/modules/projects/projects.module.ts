import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import projectRoutes from './projects.routes';

@NgModule({
  imports: [
    CommonModule,
    projectRoutes
  ],
  declarations: [ProjectsComponent]
})
export default class ProjectsModule {
}
