import { TestBed } from '@angular/core/testing';

import { ProductAPI } from './product.api';

describe('ApiService', () => {
  let service: ProductAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
