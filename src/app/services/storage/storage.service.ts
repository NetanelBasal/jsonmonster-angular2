import { Injectable } from "@angular/core";

interface IWebStorage {
  getItem<T>( key : string ) : T;
  setItem( key : string, value : any ) : void;
  removeItem( key : string ) : void;
}

@Injectable()
export class StorageService implements IWebStorage {
  private storage : IWebStorage;

  /**
   * localStorage or sessionStorage
   * @param storageStrategy
   */
  constructor( private storageStrategy : IWebStorage ) {
    this.storage = storageStrategy;
  }

  /**
   *
   * @param key
   * @returns {any}
   */
  getItem<T>( key : string ) : T {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch( e ) {
      console.warn('This browser not support LocalStorage');
    }
  }

  /**
   *
   * @param key
   * @param value
   */
  setItem( key : string, value : any ) : void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch( e ) {
      console.warn('This browser not support LocalStorage');
    }
  }

  /**
   *
   * @param key
   */
  removeItem( key : string ) : void {
    try {
      localStorage.removeItem(key);
    } catch( e ) {
      console.warn('This browser not support LocalStorage');
    }
  }

}
