import { TestBed } from '@angular/core/testing';

import { VegToppingsService } from './veg-toppings.service';

describe('VegToppingsService', () => {
  let service: VegToppingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegToppingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
