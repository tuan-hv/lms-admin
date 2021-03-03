import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReplanningEffects } from './replanning.effects';

describe('ReplanningEffects', () => {
  let actions$: Observable<any>;
  let effects: ReplanningEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReplanningEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReplanningEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
