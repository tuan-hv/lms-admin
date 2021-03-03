import { localStorageSync } from 'ngrx-store-localstorage';
import { ActionReducer } from '@ngrx/store';
import { appConfig } from "src/app/configs/configs";
import CryptoJS from "crypto-es";

function encryptFunction(str: string = null) {
  try {
    return CryptoJS.AES.encrypt(str, appConfig.encodeKey).toString();
  } catch (e) {
    return '';
  }
}

function decryptFunction(str: string = null) {
  try {
    return CryptoJS.AES.decrypt(str, appConfig.decodeKey).toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return '';
  }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{ auth: { encrypt: encryptFunction, decrypt: decryptFunction } }],
    rehydrate: true   // allowed init state from local storage
  })(reducer);
}