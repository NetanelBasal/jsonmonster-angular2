import { SessionActions } from "./session.actions";
import { StorageService } from "../../services/storage/storage.service";
import { ModalActions } from "./../modal/modal.actions";
const crio = require('crio');
const storage = new StorageService(localStorage);

const INITIAL_STATE = crio({
  isLoggedIn: !!storage.getItem<Object>('auth-user')
});

export function sessionReducer( state = INITIAL_STATE, action ) {

  switch( action.type ) {
    case SessionActions.LOGIN_USER:
      return state.merge(state, {
        fetching: true,
        error: null
      });
    case SessionActions.LOGIN_SUCCESS:
      return state.merge(state, {
        fetching: false,
        isLoggedIn: true,
        token: action.payload.token,
        error: null
      });
    case SessionActions.LOGIN_ERROR:
      return state.merge(state, {
        fetching: false,
        error: action.payload.error
      });
    case SessionActions.SIGNUP_USER:
      return state.merge(state, {
        fetching: true
      });
    case SessionActions.SIGNUP_SUCCESS:
      return state.merge(state, {
        fetching: false,
        isLoggedIn: true,
        token: action.payload.token,
        error: null
      });
    case SessionActions.SIGNUP_ERROR:
      return state.merge(state, {
        fetching: false,
        error: action.payload.error
      });
    case SessionActions.LOG_OUT_SUCCESS:
      return crio({
        isLoggedIn: false
      });
    case ModalActions.CLEAN_ALERTS:
      return state.merge({
        error: null
      })
    default:
      return state;
  }
}
