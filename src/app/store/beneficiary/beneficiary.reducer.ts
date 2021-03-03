import { createReducer, on } from '@ngrx/store';
import {
  clearBeneficiary,
  loadBeneficiarysFailure,
  loadBeneficiarysSuccess,
  processDisbursementFailure,
  processDisbursementSuccess,
} from './beneficiary.actions';

export const beneficiaryFeatureKey = 'beneficiary';

export interface IBeneficiaryPayLoad {
  data: IBeneficiary | string;
}

export enum Disbursement {
  PROCESSED = 1,
  FAILED = 0,
}

// export enum OtpStatus {
//   OK = 1,
//   FAIL = 0
// }

export interface IBeneficiary {
  id: number;
  beneficiaryBank: string;
  beneficiaryAccount: string;
  beneficiaryName: string;
  loanDisbursementId: number;
  // url?: string;
  // verifyStatus?: OtpStatus;
  // resendStatus?: OtpStatus;
  error?: string;
  // errorURL?: string;
  disbursed?: Disbursement;
}

export const initialState: IBeneficiary = {
  id: null,
  beneficiaryBank: '',
  beneficiaryAccount: '',
  beneficiaryName: '',
  loanDisbursementId: 1,
  disbursed: null,
  // url: null
};

export interface IDisbursement {
  data: string;
  status: {
    code: number;
  };
}

export const beneficiaryReducer = createReducer(
  initialState,
  on(loadBeneficiarysSuccess, (state, { payload }) => ({
    ...state,
    ...payload,
    disbursed: null,
    error: null,
  })),
  on(loadBeneficiarysFailure, (state, { error }) => ({
    ...initialState,
    error: error.message,
  })),
  on(clearBeneficiary, (state) => initialState),

  // on(loadBeneficiaryURLSuccess, (state, { payload }) => ({...state, url: payload, verifyStatus: null, resendStatus: null, errorURL: null, disbursed: null })),
  // on(loadBeneficiaryURLFailure, (state, { error }) => ({...state, url: null, disbursed: null, errorURL: error})),

  on(processDisbursementSuccess, (state) => ({
    ...state,
    disbursed: Disbursement.PROCESSED,
  })),
  on(processDisbursementFailure, (state, { error }) => ({
    ...state,
    disbursed: Disbursement.FAILED,
    error,
  }))

  // on(verifyOTPSuccess, (state) => ({...state, verifyStatus: OtpStatus.OK, resendStatus: null})),
  // on(verifyOTPFailure, (state, { message }) => ({...state, error: message, verifyStatus: OtpStatus.FAIL, resendStatus: null})),
  // on(resendOTPSuccess, (state) => ({...state, resendStatus: OtpStatus.OK, verifyStatus: null})),
  // on(resendOTPFailure, (state, { message }) => ({...state, error: message, resendStatus: OtpStatus.FAIL, verifyStatus: null})),
);
