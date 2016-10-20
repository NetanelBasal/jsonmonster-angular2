import { NgModule } from '@angular/core';
import { CreateApiComponent } from './create-api.component';
import createApiRoutes from './create-api.routes';
import { provideAuth } from 'angular2-jwt';
import SharedModule from "../shared/shared.module";
import { ChoicesDirective } from "../../directives/choices/choices.directive";
import { getUserToken } from "../../helpers/auth";

@NgModule({
  imports: [
    createApiRoutes,
    SharedModule
  ],
  declarations: [CreateApiComponent, ChoicesDirective]
})
export default class CreateApiModule {
}
