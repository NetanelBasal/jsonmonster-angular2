import { StorageService } from "../services/storage/storage.service";
const storage = new StorageService(localStorage);
/**
 *
 * @returns {any}
 */
export function getUserToken() : string {
  const userFromStorage : any = storage.getItem<Object>('auth-user');
  const token = userFromStorage ? userFromStorage.token : '';
  return token;
}
