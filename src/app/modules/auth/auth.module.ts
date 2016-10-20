import { NgModule } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import SharedModule from "../shared/shared.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [SharedModule, NgbModule.forRoot()],
  exports: [LoginComponent, SignupComponent],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  entryComponents: [LoginComponent, SignupComponent]
})
export default class AuthModule {
}
