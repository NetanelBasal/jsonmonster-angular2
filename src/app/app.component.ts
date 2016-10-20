import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from "ng2-redux";
import { IAppState, rootReducer } from "./store/index";
import { environment } from "../environments/environment";
import { createEpicMiddleware } from 'redux-observable';
import { SessionEpics } from "./data/session/session.epics";
import { CreateApiEpics } from "./data/create-api/create-api.epics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( ngRedux : NgRedux<IAppState>,
               private devTools : DevToolsExtension,
               private createApiEpics : CreateApiEpics,
               private sessionEpics : SessionEpics ) {

    const middleware = [
      createEpicMiddleware(sessionEpics.signup),
      createEpicMiddleware(sessionEpics.login),
      createEpicMiddleware(sessionEpics.signout),
      createEpicMiddleware(createApiEpics.createApi)
    ];

    let enhancers = [];

    if( !environment.production && devTools.isEnabled() ) {
      enhancers = [...enhancers, devTools.enhancer()];
    }
    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }
}
