import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { environment } from "src/environments/environment";
import { environment } from "src/environments/environment";

export class HTTP {

  private httpConfig = {
    url: environment.base_url,
  }

  constructor(protected http: HttpClient) { }

  protected queryParams(params: object) {
    const queryString = new URLSearchParams();
    for(let key in params){
      queryString.append(key, params[key]);
    }
    return queryString.toString();
  }

  getHeaders() {
    return new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  }

  getOptionsRequest() {
    return {
      headers: this.getHeaders()
    }
  }

  getCustomOptions(options: object) {
    return Object.assign(this.getOptionsRequest(), options);
  }

  protected get(uri: string, options?: object) {
    return this.http.get(this.httpConfig.url + uri, this.getCustomOptions(options));
  }

  protected post(uri: string, body?: any, options?: object) {
    return this.http.post(this.httpConfig.url + uri, body, this.getCustomOptions(options));
  }

  protected update(uri: string, body?: any, options?: object) {
    return this.http.put(this.httpConfig.url + uri, body, this.getCustomOptions(options));
  }

  protected delete(uri: string, options?: object) {
    return this.http.delete(this.httpConfig.url + uri, this.getCustomOptions(options));
  }

}

export declare type HttpObserve = 'body' | 'events' | 'response';

export interface IOptionsRequest {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: HttpObserve;
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}