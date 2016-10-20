import { combineReducers } from 'redux';
import { sessionReducer as session } from './../data/session/session.reducer';
import { createApiReducer as  createApi } from "../data/create-api/create-api.reducer";
export interface IAppState {
  session?;
  createApi?;
}

export const rootReducer = combineReducers<IAppState>({
  session,
  createApi
});
