import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { select } from "ng2-redux";
import { isLoggedIn } from "../../data/session/session.selectors";
import { Observable } from "rxjs";

@Directive({selector: '[showIfLoggedIn]'})

export class ShowIfLoggedInDirective {
  subscription;
  @Input('showIfLoggedIn') renderTemplate;
  @select(isLoggedIn) isLoggedIn$ : Observable<boolean>;

  constructor( private templateRef : TemplateRef<any>,
               private viewContainer : ViewContainerRef ) {
  }

  ngOnInit() {
    this.subscription = this.isLoggedIn$.subscribe(isLoggedIn => {

      if( isLoggedIn ) {
        // if logged in and you set the option for rendering only when logged in
        // so render the template
        if( this.renderTemplate ) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          // if logged in and you set the option for rendering only when not logged in
          // remove the template
          this.viewContainer.clear();
        }
      } else {
        // if not logged in and you set the option for rendering only when logged in
        // remove the template
        if( this.renderTemplate ) {
          this.viewContainer.clear();
        } else {
          // if not logged in and you set the option for rendering when not logged in
          // render the template
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }

    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
