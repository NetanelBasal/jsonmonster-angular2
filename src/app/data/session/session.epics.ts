import { Injectable } from '@angular/core';
import { SessionActions } from "../../data/session/session.actions";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SessionService } from "../../services/session/session.service";
import { Router } from "@angular/router";

@Injectable()
export class SessionEpics {
  constructor( private sessionService : SessionService, private router : Router ) {
  }

  /**
   *  Login the user then save the session to local storage or dispatch the error
   * @param action$
   * @returns {Observable<R>}
   */
  login = ( action$ ) => {
    return action$.ofType(SessionActions.LOGIN_USER)
      .flatMap(( {user} ) => {
        return this.sessionService.login(user)
          .do(payload => {
            this.sessionService.setSession(payload.json());
          }).map(result => ({
            type: SessionActions.LOGIN_SUCCESS,
            payload: result.json()
          })).catch(error => Observable.of({
            type: SessionActions.LOGIN_ERROR,
            payload: error.json()
          }));
      });
  }

  /**
   * Signup the user then save the session to local storage or dispatch the error
   * @param action$
   * @returns {Observable<R>}
   */
  signup = ( action$ ) => {
    return action$.ofType(SessionActions.SIGNUP_USER)
      .flatMap(( {user} ) => {
        return this.sessionService.signup(user)
          .do(response => {
            this.sessionService.setSession(response.json());
            this.router.navigate(['/create-api']);
          }).map(result => ({
            type: SessionActions.SIGNUP_SUCCESS,
            payload: result.json()
          })).catch(error => Observable.of({
            type: SessionActions.SIGNUP_ERROR,
            payload: error.json()
          }));
      });
  }

  /**
   *
   * @param action$
   * @returns {Observable<R>}
   */
  signout = ( action$ ) => {
    return action$.ofType(SessionActions.LOG_OUT)
      .do(() => {
        this.sessionService.logout();
      }).map(() => ({
        type: SessionActions.LOG_OUT_SUCCESS
      }))

  }
}

