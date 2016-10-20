import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select } from "ng2-redux";
import { Observable } from "rxjs";
import { isLoggedIn, sessionError } from "../../../data/session/session.selectors";
import { ModalActions } from "../../../data/modal/modal.actions";
import { SessionActions } from "../../../data/session/session.actions";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy {
  loginForm : FormGroup;
  submitted : boolean = false;
  @select(isLoggedIn) isLoggedIn$ : Observable<boolean>;
  @select(sessionError) hasError$ : Observable<string>;

  constructor( public activeModal : NgbActiveModal, public fb : FormBuilder, public sessionActions : SessionActions, public modalActions : ModalActions ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.isLoggedIn$.filter(isLoggedIn => !!isLoggedIn).subscribe(_ => this.activeModal.close());
  }

  submit( form : FormGroup ) {
    this.submitted = true;
    if( form.invalid ) return;
    this.sessionActions.loginUser(form.value);
  }

  ngOnDestroy() {
    this.modalActions.cleanAlerts();
  }

}
