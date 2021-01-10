import { TestBed } from '@angular/core/testing';

import { InqooApiService } from './inqoo-api.service';

describe('InqooApiService', () => {
  let service: InqooApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InqooApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
