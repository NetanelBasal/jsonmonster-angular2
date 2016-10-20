import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from "@angular/router";
import { CreateApiService } from "../../modules/create-api/create-api.service";
import CreateApiActions from "./create-api.actions";

@Injectable()
export class CreateApiEpics {
  constructor( private createApiService : CreateApiService, private router : Router ) {
  }

  createApi = ( action$ ) => {
    return action$.ofType(CreateApiActions.CREATE_API)
      .flatMap(( {schema} ) => {
        return this.createApiService.create(schema)
          .delay(2000)
          .do(payload => {
            this.router.navigate(['/projects']);
          }).map(result => ({
            type: CreateApiActions.CREATE_API_SUCCESS,
            payload: result.json()
          })).catch(error => Observable.of({
            type: CreateApiActions.CREATE_API_ERROR,
            payload: error.json()
          }));
      });
  }

}

