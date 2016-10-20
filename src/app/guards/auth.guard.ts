import { Injectable } from "@angular/core";
import { SessionService } from "../services/session/session.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private sessionService : SessionService, private router : Router ) {
  }

  /**
   *
   * @param route
   * @param state
   * @returns {boolean}
   */
  canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) : boolean {
    if( !this.sessionService.isLoggedIn() ) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}
