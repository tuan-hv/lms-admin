import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_CONFIG } from 'src/app/configs/configs';
import { IBeneficiaryPayLoad, IDisbursement } from 'src/app/store/beneficiary/beneficiary.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient) { }

  loadBeneficiaryByApplicationId(uuid: string) : Observable<IBeneficiaryPayLoad> {
    return this.http.get<IBeneficiaryPayLoad>(`${environment.base_url}${URL_CONFIG.loanAccount.disbursement}?uuid=${uuid}`)
  }

  loadBeneficiaryURLByApplicationId(uuid: string) : Observable<IBeneficiaryPayLoad> {
    return this.http.post<IBeneficiaryPayLoad>(`${environment.base_url}${URL_CONFIG.loanAccount.disbursement_url}`, {"uuid" : uuid})
  }

  resendOTP(url: string) : Observable<IBeneficiaryPayLoad> {
    return this.http.get<IBeneficiaryPayLoad>(url)
  }

  verifyOTP(url: string, otp: string) : Observable<IBeneficiaryPayLoad> {
    return this.http.post<IBeneficiaryPayLoad>(url, {"value" : otp})
  }

  doDisbursement(disbr: IDisbursement) : Observable<string> {
    return this.http.post<string>(`${environment.base_url}${URL_CONFIG.loanAccount.disbursement_process}`, disbr);
  }
}
