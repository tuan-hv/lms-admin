import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONFIG } from 'src/app/configs/configs';
import { ITransactionPayload } from 'src/app/store/transaction/transaction.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getById({id}): Observable<ITransactionPayload> {
    return this.http.get<ITransactionPayload>(`${environment.base_url}${URL_CONFIG.loanAccount.transaction}/${id}`);
  }
}
