import { URL_CONFIG } from 'src/app/configs/configs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '../http';
import { ILoanAccountPayLoad, ILoanAccountTypes } from 'src/app/store/loan-account/loan-account.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanAccountService extends HTTP {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getLoanAccount(params: object): Observable<ILoanAccountPayLoad> {
    const url = `${environment.base_url}${URL_CONFIG.loanAccount.loanSearchForm}?${this.queryParams(params)}`;
    return this.http.get<ILoanAccountPayLoad>(url);
  }

  getLoanType(): Observable<ILoanAccountTypes> {
    const url = `${environment.base_url}${URL_CONFIG.loanAccount.loanType}`;
    return this.http.get<ILoanAccountTypes>(url);
  }
}
