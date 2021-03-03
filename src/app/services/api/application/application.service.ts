import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONFIG } from 'src/app/configs/configs';
import {
  IApplicationPayload,
} from 'src/app/store/application/application.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getApplicationById(id: string): Observable<IApplicationPayload> {
    return this.http.get<IApplicationPayload>(
      `${environment.base_url}${URL_CONFIG.loanAccount.loan}/${id}`
    );
  }
}
