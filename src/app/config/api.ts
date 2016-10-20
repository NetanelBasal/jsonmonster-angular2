import { OpaqueToken } from '@angular/core';
import { environment } from "../../environments/environment";

export interface IApiConfig {
  login : string;
  signup : string;
  createApi : string;
}

export const API_CONFIG = new OpaqueToken('app.api');
const API_URL = `${environment.BASE_URL}/api/v1`;

export const _API_CONFIG : IApiConfig = {
  login: `${API_URL}/login`,
  signup: `${API_URL}/signup`,
  createApi: `${API_URL}/project`
};
