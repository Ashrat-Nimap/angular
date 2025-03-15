import { TestBed } from '@angular/core/testing';

import { TosterServiceService } from './toster-service.service';

describe('TosterServiceService', () => {
  let service: TosterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
