import { SessionActions } from "../session/session.actions";
import { StorageService } from '../../services/storage/storage.service'
const crio = require('crio');
const storage = new StorageService(localStorage);
/**
 *
 *  THIS REDUCER NOT IN USE IN THIS SPECIFIC PROJECT
 */

const userFromStorage : any = storage.getItem<Object>('auth-user');
const user = userFromStorage ? userFromStorage.user : {};
const INITIAL_STATE = crio(user);

export function userReducer( state = INITIAL_STATE, action ) {
  switch( action.type ) {
    case SessionActions.LOGIN_SUCCESS:
      return state.merge(state, action.payload.user);
    case SessionActions.SIGNUP_SUCCESS:
      return state.merge(state, action.payload.user);
    case SessionActions.LOG_OUT_SUCCESS:
      return crio({});
    default:
      return state;
  }
}
