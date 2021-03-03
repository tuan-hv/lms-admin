import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RepaymentEffects } from './repayment.effects';

describe('RepaymentEffects', () => {
  let actions$: Observable<any>;
  let effects: RepaymentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepaymentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RepaymentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
