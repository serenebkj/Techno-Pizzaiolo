import { TestBed } from '@angular/core/testing';

import { InfoGetService } from './info-get.service';

describe('InfoGetService', () => {
  let service: InfoGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
