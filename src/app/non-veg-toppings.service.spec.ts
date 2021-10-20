import { TestBed } from '@angular/core/testing';

import { NonVegToppingsService } from './non-veg-toppings.service';

describe('NonVegToppingsService', () => {
  let service: NonVegToppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonVegToppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
