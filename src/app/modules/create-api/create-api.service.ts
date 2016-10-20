import { Injectable, Inject } from "@angular/core";
import { AuthHttp } from 'angular2-jwt';
import { API_CONFIG, IApiConfig } from "../../config/api";

interface ISchema {
  projectName : string;
  tableName : string;
  numRows : number;
  columns : Array<Object>;
}

@Injectable()
export class CreateApiService {
  constructor( private authHttp : AuthHttp, @Inject(API_CONFIG) private apiConfig : IApiConfig ) {
  }

  /**
   *
   * @param schema
   * @returns {Observable<Response>}
   */
  create( schema : ISchema ) {
    return this.authHttp.post(this.apiConfig.createApi, schema);
  }

  /**
   * get user projects
   * @returns {Observable<Response>}
   */
  getProjects() {
    return this.authHttp.get(this.apiConfig.createApi);
  }
}
