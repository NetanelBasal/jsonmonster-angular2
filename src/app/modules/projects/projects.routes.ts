import { ProjectsComponent } from "./projects.component";
import { Routes, RouterModule } from "@angular/router";
const routes : Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
]

export default RouterModule.forChild(routes);
