import { TestBed } from '@angular/core/testing';

import { ReplanningService } from './replanning.service';

describe('ReplanningService', () => {
  let service: ReplanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
