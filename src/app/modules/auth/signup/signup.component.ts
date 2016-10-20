import { Component, OnDestroy } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { select } from "ng2-redux";
import { Observable } from "rxjs";
import { isLoggedIn, sessionError } from "../../../data/session/session.selectors";
import { SessionActions } from "../../../data/session/session.actions";
import { ModalActions } from "../../../data/modal/modal.actions";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnDestroy {

  @select(isLoggedIn) $isLoggedIn : Observable<boolean>;
  @select(sessionError) hasError$ : Observable<string>;
  signUpForm : FormGroup;
  submitted : boolean = false;

  constructor( public activeModal : NgbActiveModal, private fb : FormBuilder, private sessionActions : SessionActions, public modalActions : ModalActions ) {
    this.signUpForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.$isLoggedIn.filter(isLoggedIn => !!isLoggedIn).subscribe(() => this.activeModal.close());

  }

  submit( form : FormGroup ) {
    this.submitted = true;
    if( form.invalid ) return;
    this.sessionActions.signupUser(form.value);
  }

  ngOnDestroy() {
    this.modalActions.cleanAlerts();
  }

}
