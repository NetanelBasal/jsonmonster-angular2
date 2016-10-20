import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import SharedModule from "../shared/shared.module";
import homeRoutes from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRoutes
  ],
  declarations: [HomeComponent]
})
export default class HomeModule {
}
