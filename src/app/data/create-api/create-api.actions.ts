import { NgRedux } from "ng2-redux";
import { IAppState } from "../../store/index";
import { Injectable } from "@angular/core";

@Injectable()
export default class CreateApiActions {

  constructor( private ngRedux : NgRedux<IAppState> ) {
  }

  static CREATE_API = "CREATE_API";
  static CREATE_API_SUCCESS = "CREATE_API_SUCCESS";
  static CREATE_API_ERROR = "CREATE_API_ERROR";

  createApi(schema) {
    this.ngRedux.dispatch({
      type: CreateApiActions.CREATE_API,
      schema
    });
  }

  createApiSuccess() {
    this.ngRedux.dispatch({
      type: CreateApiActions.CREATE_API_SUCCESS
    })
  }

  createApiError() {
    this.ngRedux.dispatch({
      type: CreateApiActions.CREATE_API_ERROR
    })
  }

}
