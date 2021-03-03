import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BeneficiaryEffects } from './beneficiary.effects';

describe('BeneficiaryEffects', () => {
  let actions$: Observable<any>;
  let effects: BeneficiaryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeneficiaryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BeneficiaryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
