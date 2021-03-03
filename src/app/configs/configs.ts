// nz configuration
import { NzConfig } from 'ng-zorro-antd/core/config';
import { IPaginationComponent, IPaging } from '../utils/pagination.interface';

export const appConfig = {
  encodeKey: '11FGA6432KLV98TTY',
  decodeKey: '11FGA6432KLV98TTY',
  baseUrl: 'http://192.90.50.255:9082',
};

export const URL_CONFIG = {
  loanAccount: {
    loan: '/loan-application',
    transaction: '/loan-transaction',
    disbursement: '/beneficiary-info',
    disbursement_url: '/funding/disbursement-url',
    disbursement_process: '/funding/process-disbursement',
    repaymentSchedule: '/repayments/schedule',
    loanSearchForm: '/loan-application/filter',
    loanType: '/loan-application/loan-type',
    transactionHistory : '/transaction-history',
    loanDetail: '/loan-account/detail',
  },
};

export const defaultPage = {
  pageNumber: 0,
  pageSize: 10,
  totalPage: 0,
  totalRecord: 0,
} as IPaging;

export const defaultPageForm = {
  serverPage: 0,
  itemsPerPage: 10
} as IPaginationComponent;

export const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

export const ngZorroConfig: NzConfig = {
  notification: {
    nzDuration: 1000,
  },
  empty: {
    nzDefaultEmptyContent: '123',
  },
};
