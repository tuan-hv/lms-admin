import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { BeneficiaryService } from 'src/app/services/api/beneficiary/beneficiary.service';

import {
  loadBeneficiaryByApplicationID,
  loadBeneficiarysFailure,
  loadBeneficiarysSuccess,
  loadBeneficiaryURLByApplicationID,
  loadBeneficiaryURLFailure,
  loadBeneficiaryURLSuccess,
  processDisbursement,
  processDisbursementFailure,
  processDisbursementSuccess,
  resendOTP,
  resendOTPFailure,
  resendOTPSuccess,
  verifyOTP,
  verifyOTPFailure,
  verifyOTPSuccess,
} from './beneficiary.actions';
import { IBeneficiary } from './beneficiary.reducer';

@Injectable()
export class BeneficiaryEffects {
  beneficiary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBeneficiaryByApplicationID),
      mergeMap((payload) =>
        this.service.loadBeneficiaryByApplicationId(payload.uuid).pipe(
          map((beneficiaryPayload) =>
            loadBeneficiarysSuccess({
              payload: beneficiaryPayload.data as IBeneficiary,
            })
          ),
          catchError((e) => of(loadBeneficiarysFailure({ error: e })))
        )
      )
    )
  );

  beneficiaryURL$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBeneficiaryURLByApplicationID),
      mergeMap((payload) =>
        this.service.loadBeneficiaryURLByApplicationId(payload.uuid).pipe(
          map((beneficiaryPayload) =>
            loadBeneficiaryURLSuccess({
              payload: beneficiaryPayload.data as string,
            })
          ),
          catchError((e) => of(loadBeneficiaryURLFailure({ error: e.error ? e.error.status?.message : e.message })))
        )
      )
    )
  );

  
  processDisbursement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(processDisbursement),
      mergeMap((payload) =>
        this.service.doDisbursement(payload).pipe(
          map(() => processDisbursementSuccess()),
          catchError((e) => 
            {
            console.log("e", e);
            
            return of(processDisbursementFailure({ error: e.error ? e.error.status?.message : e.message }))

            }
          )
        )
      )
    )
  );

  resendOTP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resendOTP),
      mergeMap((payload) =>
        this.service.resendOTP(payload.url).pipe(
          map(() => resendOTPSuccess()),
          catchError((e) => of(resendOTPFailure({ message: e.message })))
        )
      )
    )
  );

  verifyOTP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifyOTP),
      mergeMap((payload) =>
        this.service.verifyOTP(payload.url, payload.otp).pipe(
          map(() => verifyOTPSuccess()),
          catchError((e: HttpErrorResponse) => {
            if (e.status == 400) {
              return of(
                verifyOTPFailure({
                  message: e.error.message,
                })
              );
            }
            else {
              return of(
                verifyOTPFailure({
                  message: e.message,
                })
              );
            }

          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: BeneficiaryService) {}
}
