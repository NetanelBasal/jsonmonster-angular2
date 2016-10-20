import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "../modules/auth/login/login.component";
import { SignupComponent } from "../modules/auth/signup/signup.component";
import { SessionActions } from "../data/session/session.actions";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor( private modalService : NgbModal,
               public sessionActions : SessionActions,
               private router : Router ) {
  }


  openLogin() {
    this.modalService.open(LoginComponent);
  }

  openSignup() {
    this.modalService.open(SignupComponent);
  }

  logOut() {
    this.sessionActions.logout();
    this.router.navigate(['/']);
  }

}
