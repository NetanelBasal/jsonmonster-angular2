import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { API_CONFIG, IApiConfig } from "../../config/api";
import { StorageService } from "../storage/storage.service";

interface ISession {
  email : string;
  password : string
}

// Separate interface because usually in the signup will be more details like name..
interface ISignup extends ISession {
}

@Injectable()
export class SessionService {

  constructor( private http : Http,
               private storage : StorageService,
               @Inject(API_CONFIG) private api : IApiConfig ) {
  }

  /**
   *
   * @param user
   * @returns {Observable<Response>}
   */
  signup( user : ISignup ) {
    return this.http.post(this.api.signup, user);
  }

  /**
   *
   * @param user
   * @returns {Observable<Response>}
   */
  login( user : ISession ) {
    return this.http.post(this.api.login, user);
  }

  /**
   * Logout
   */
  logout() {
    this.storage.removeItem('auth-user');
  }

  /**
   * Set the session to local storage
   * @param user
   */
  setSession( user ) {
    this.storage.setItem('auth-user', user);
  }

  /**
   *
   * @returns {boolean}
   */
  isLoggedIn() : boolean {
    return !!this.storage.getItem<Object>('auth-user');
  }

}
