import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from "../../store/index";

@Injectable()
export class ModalActions {
  constructor( private ngRedux : NgRedux<IAppState> ) {
  }

  static CLEAN_ALERTS : string = 'CLEAN_ALERTS';

  /**
   * Clean all the alerts states when closing the modal
   */
  cleanAlerts() {
    this.ngRedux.dispatch({
      type: ModalActions.CLEAN_ALERTS
    });
  }

}
