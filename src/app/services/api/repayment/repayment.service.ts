import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONFIG } from 'src/app/configs/configs';
import {
  IRepaymentForm,
  IRepaymentPayLoad,
} from 'src/app/store/repayment/repayment.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepaymentService {
  constructor(private http: HttpClient) {}

  getRepaymentList(form: IRepaymentForm): Observable<IRepaymentPayLoad> {
    const url = `${environment.base_url}${URL_CONFIG.loanAccount.repaymentSchedule}?fromDate=${form.fromDate}&pageNumber=${form.paging.serverPage}&pageSize=${form.paging.itemsPerPage}&toDate=${form.toDate}&uuid=${form.uuid}`;
    return this.http.get<IRepaymentPayLoad>(url);
  }
}
