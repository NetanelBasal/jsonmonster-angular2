import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from "../../store/index";

@Injectable()
export class SessionActions {
  constructor( private ngRedux : NgRedux<IAppState> ) {
  }

  static LOGIN_USER : string = 'LOGIN_USER';
  static LOGIN_SUCCESS : string = 'LOGIN_SUCCESS';
  static LOGIN_ERROR : string = 'LOGIN_ERROR';
  static SIGNUP_USER : string = 'SIGNUP_USER';
  static SIGNUP_SUCCESS : string = 'SIGNUP_SUCCESS';
  static SIGNUP_ERROR : string = 'SIGNUP_ERROR';
  static LOG_OUT : string = 'LOG_OUT';
  static LOG_OUT_SUCCESS : string = 'LOG_OUT_SUCCESS';

  /**
   *
   * @param user
   */
  loginUser( user ) {
    this.ngRedux.dispatch({
      type: SessionActions.LOGIN_USER,
      user
    });
  }

  /**
   *
   * @param user
   */
  signupUser( user ) {
    this.ngRedux.dispatch({
      type: SessionActions.SIGNUP_USER,
      user
    });
  }

  /**
   * Log out
   */
  logout() {
    this.ngRedux.dispatch({
      type: SessionActions.LOG_OUT
    });
  }

}
