import CreateApiActions from "./create-api.actions";

const INITIAL_STATE = {fetching: false, error: false};

export function createApiReducer( state = INITIAL_STATE, action ) {

  switch( action.type ) {
    case CreateApiActions.CREATE_API:
      return {
        fetching: true,
        error: false
      }
    case CreateApiActions.CREATE_API_SUCCESS:
      return {fetching: false, error: false}
    case CreateApiActions.CREATE_API_ERROR:
      return {
        fetching: false,
        error: action.error
      }
    default:
      return state;
  }

}
