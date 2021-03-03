import { createReducer, on } from '@ngrx/store';
import {
  loadApplicationsFailure,
  loadApplicationsSuccess,
} from './application.actions';

export const applicationFeatureKey = 'application';

export interface IApplicationPayload {
  data: IApplication;
}

export interface ILoanPersonInfo {
  id: number;
  fullName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  emailAddress: string;
  address: string;
}

export interface ILoanContactInfo {
  id: number;
  refAddress: string;
  refDob: Date;
  refEmail: string;
  refFullName: string;
  refPhoneNumber: string;
  refType: number;
  refTypeName: string;
}

export interface ILoanJobInfo {
  companyAddress: string;
  companyName: string;
  expense: number;
  id: number;
  latestUpdate: Date;
  preTaxIncome: number;
}

export interface IDisbursedInfo {
  disbursedAmount: number;
  disbursedMethod: string;
}

export interface IApplication {
  id: string;
  uuid: string;
  accountNumber: string;
  currency: string;
  loanAmount: number;
  outstandingBalance: number;
  interestAccrued: number;
  interestDue: number;
  interestRate: number;
  loanType: string;
  loanTerm: string;
  termUnit?: string;
  loanStatus: number;
  loanStatusName: string;
  createdDate: Date;
  signedOffDate: Date;
  expireDate: Date;
  disburseDate: Date;
  disbursedInfo?: IDisbursedInfo;
  loanContactInformation?: ILoanContactInfo[];
  loanJobInformation?: ILoanJobInfo;
  paymentAmount: number;
  paymentFrequency?: number;
  loanPersonalInformation?: ILoanPersonInfo[];
}

export const initialState: IApplication = {
  id: null,
  uuid: null,
  accountNumber: '',
  currency: '',
  loanAmount: 0,
  outstandingBalance: 0,
  interestAccrued: 0,
  interestDue: 0,
  interestRate: 0,
  loanType: '',
  loanTerm: '',
  loanStatus: 0,
  loanStatusName: '',
  createdDate: null,
  signedOffDate: null,
  disburseDate: null,
  expireDate: null,
  paymentAmount: 0,
  loanPersonalInformation: [
    {
      id: null,
      fullName: '',
      phoneNumber: '',
      dateOfBirth: null,
      emailAddress: '',
      address: '',
    },
  ],
};

function loanPersonalInformation(
  loanPersonalInformation: ILoanPersonInfo[]
): ILoanPersonInfo[] {
  return !loanPersonalInformation || !loanPersonalInformation.length
    ? [defaultLPI]
    : loanPersonalInformation;
}

function loanContactInformation(
  loanContactInformation: ILoanContactInfo[]
): ILoanContactInfo[] {
  return !loanContactInformation || !loanContactInformation.length
    ? [defaultLCI]
    : loanContactInformation;
}

function loanJobInformation(loanJobInformation: ILoanJobInfo): ILoanJobInfo {
  return !loanJobInformation ? defaultLJI : loanJobInformation;
}

const defaultLPI = {
  id: null,
  fullName: '',
  phoneNumber: '',
  dateOfBirth: null,
  emailAddress: '',
  address: '',
};

const defaultLJI = {
  companyAddress: '',
  companyName: '',
  expense: 0,
  id: 0,
  latestUpdate: null,
  preTaxIncome: 0,
} as ILoanJobInfo;

const defaultLCI = {
  id: 0,
  refAddress: '',
  refDob: null,
  refEmail: '',
  refFullName: '',
  refPhoneNumber: '',
  refType: 0,
  refTypeName: '',
} as ILoanContactInfo;

export const applicationReducer = createReducer(
  initialState,
  on(loadApplicationsSuccess, (state, { payload }) => ({
    ...state,
    ...payload,
    loanPersonalInformation: loanPersonalInformation(
      payload.loanPersonalInformation
    ),
    loanContactInformation: loanContactInformation(
      payload.loanContactInformation
    ),
    loanJobInformation: loanJobInformation(payload.loanJobInformation),
  })),
  on(loadApplicationsFailure, (state, { error }) => ({
    ...initialState,
    error: error.message,
  }))
);
