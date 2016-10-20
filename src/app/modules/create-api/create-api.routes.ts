import { CreateApiComponent } from "./create-api.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../guards/auth.guard";

const routes : Routes = [
  {
    path: '',
    component: CreateApiComponent,
    canActivate: [AuthGuard]
  }
]

export default RouterModule.forChild(routes)
