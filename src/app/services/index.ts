import { SessionService } from './session/session.service';
import { StorageService } from "./storage/storage.service";
import { CreateApiService } from "../modules/create-api/create-api.service";
import { getUserToken } from "../helpers/auth";
import { provideAuth } from "angular2-jwt";

export default [
  SessionService,
  CreateApiService,
  provideAuth({
    noJwtError: true,
    tokenGetter: () => {
      return getUserToken();
    }
  }),
  {
    provide: StorageService, useFactory: () => {
    return new StorageService(localStorage);
  }
  }
]
