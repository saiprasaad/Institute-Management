import { TestBed } from '@angular/core/testing';

import { MarksallocService } from './marksalloc.service';

describe('MarksallocService', () => {
  let service: MarksallocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksallocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
