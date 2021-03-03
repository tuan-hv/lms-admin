import { TestBed } from '@angular/core/testing';

import { TokenInvalid } from './token-invalid.service';

describe('TokenInvalidService', () => {
  let service: TokenInvalid;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInvalid);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
