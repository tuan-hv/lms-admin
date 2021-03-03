import { IReplanningPayLoad } from './../../../store/replanning/replanning.reducer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplanningService {

  constructor(protected http: HttpClient) {
  }

  getReplans(params: object): Observable<IReplanningPayLoad> {
    const url = `https://60363685c3d42700172e664b.mockapi.io/api/relanning/replanning`;
    return this.http.get<IReplanningPayLoad>(url);
  }
}
