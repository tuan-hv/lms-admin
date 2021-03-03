import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RepaymentService } from 'src/app/services/api/repayment/repayment.service';
import { loadRepayments, loadRepaymentsFailure, loadRepaymentsSuccess } from './repayment.actions';

@Injectable()
export class RepaymentEffects {

  repaymentSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRepayments),
      mergeMap((repaymentForm) =>
        this.repaymentService.getRepaymentList(repaymentForm).pipe(
          map((repaymentPayload) =>
            loadRepaymentsSuccess(repaymentPayload)
          ),
          catchError((e) => of(loadRepaymentsFailure({error: e})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private repaymentService: RepaymentService) {}

}
