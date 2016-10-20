import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../auth/login/login.component";
import { SignupComponent } from "../auth/signup/signup.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  constructor( public modal : NgbModal ) {
  }

  openLogin() {
    this.modal.open(LoginComponent);
  }

  openSignup() {
    this.modal.open(SignupComponent);
  }

}
