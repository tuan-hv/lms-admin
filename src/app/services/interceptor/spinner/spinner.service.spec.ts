import { TestBed } from '@angular/core/testing';

import { Spinner } from './spinner.service';

describe('SpinnerService', () => {
  let service: Spinner;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spinner);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
