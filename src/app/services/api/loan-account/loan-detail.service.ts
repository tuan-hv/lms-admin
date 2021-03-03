import { URL_CONFIG } from 'src/app/configs/configs';
import { environment } from './../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '../http';
import { ILoanTransaction } from 'src/app/store/transaction/transaction.reducer';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailService extends HTTP {

  constructor(protected http: HttpClient) {
    super(http);
  }

  searchTransactionHistory(params: object): Observable<ILoanTransaction> {
    const url = `${environment.base_url}${URL_CONFIG.loanAccount.transactionHistory}?${this.queryParams(params)}`;
    return this.http.get<ILoanTransaction>(url);
  }

}
