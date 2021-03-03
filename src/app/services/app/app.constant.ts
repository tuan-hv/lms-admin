import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstant {
  public static LOAN_DETAIL_TABS = {INFO: 'info',TRANS: 'trans', REPLAN: 'replan'};
  public static DATE_VN = "dd/MM/yyyy";
  public static DATETIME_VN = "dd/MM/yyyy HH:mm:ss";

  public static API_TRANSACTION_HISTORY_URI = "/transaction-history";
  public static API_LOANAPPLICATION_FILTER_URI = "/loan-application/filter";
  public static API_LOANAPPLICATION_LOANTYPE_URI = "/loan-application/loan-type";

  public static CURRENTCY_VIETNAM = "VND";

  public static DATE_LESS_THAN = "Date from should be less than Date to";

  public static DEFAULT_BEFORE_DAYS = 7776000000;
}
