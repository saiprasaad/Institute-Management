import { TestBed } from '@angular/core/testing';

import { SuballocserviceService } from './suballocservice.service';

describe('SuballocserviceService', () => {
  let service: SuballocserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuballocserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
