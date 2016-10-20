import { DocsComponent } from "./docs.component";
import { RouterModule, Routes } from "@angular/router";
const router: Routes = [
  {
    path: '',
    component: DocsComponent
  }
];

export default RouterModule.forChild(router);
