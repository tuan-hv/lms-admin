import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from "src/app/services/api/http";

@Injectable({
  providedIn: 'root'
})
export class ProductAPI extends HTTP {

  constructor(protected http: HttpClient) {
    super(http);
  }

}
