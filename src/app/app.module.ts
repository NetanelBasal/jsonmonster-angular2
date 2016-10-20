import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonmonsterRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NgReduxModule } from 'ng2-redux';
import Services from './services';
import Actions from './actions';
import Epics from './epics';
import Guards from './guards';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { API_CONFIG, _API_CONFIG } from "./config/api";
import SharedModule from "./modules/shared/shared.module";
import AuthModule from "./modules/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    JsonmonsterRoutingModule,
    NgReduxModule,
    NgbModule.forRoot(),
    SharedModule,
    AuthModule
  ],
  providers: [
    ...Actions,
    ...Services,
    ...Epics,
    ...Guards,
    {provide: API_CONFIG, useValue: _API_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
//TODO: REMOVE THIS
console.warn = function () {
}
