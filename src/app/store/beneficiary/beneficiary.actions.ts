import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IBeneficiary, IDisbursement } from './beneficiary.reducer';

export const loadBeneficiarys = createAction(
  '[Beneficiary] Load Beneficiarys'
);

export const clearBeneficiary = createAction(
  '[Beneficiary] Clear Beneficiary'
);

export const loadBeneficiaryByApplicationID = createAction(
  '[Beneficiary] Load Beneficiarys By Application Id', props<{uuid: string}>()
);

export const loadBeneficiaryURLByApplicationID = createAction(
  '[Beneficiary] Load Beneficiary URL By Application Id', props<{uuid: string}>()
);

export const resendOTP = createAction(
  '[Beneficiary] resend OTP', props<{url: string}>()
);

export const resendOTPSuccess = createAction(
  '[Beneficiary] resend OTP Success'
);

export const verifyOTP = createAction(
  '[Beneficiary] verify OTP', props<{url: string, otp: string}>()
);

export const verifyOTPSuccess = createAction(
  '[Beneficiary] verify OTP Success'
);

export const verifyOTPFailure = createAction(
  '[Beneficiary] verify OTP Failure',
  props<{ message: string }>()
);

export const resendOTPFailure = createAction(
  '[Beneficiary] resend OTP Failure',
  props<{ message: string }>()
);

export const loadBeneficiarysSuccess = createAction(
  '[Beneficiary] Load Beneficiarys Success',
  props<{ payload: IBeneficiary }>()
);


export const loadBeneficiaryURLSuccess = createAction(
  '[Beneficiary] Load Beneficiary URL Success',
  props<{ payload: string }>()
);

export const loadBeneficiarysFailure = createAction(
  '[Beneficiary] Load Beneficiarys Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadBeneficiaryURLFailure = createAction(
  '[Beneficiary] Load Beneficiary URL Failure',
  props<{ error: string }>()
);

export const processDisbursement = createAction(
  '[Beneficiary] process Disbursement',
  props<IDisbursement>()
);


export const processDisbursementSuccess = createAction(
  '[Beneficiary] process Disbursement Success'
);


export const processDisbursementFailure = createAction(
  '[Beneficiary] process Disbursement Failure',
  props<{ error: string }>()
);
