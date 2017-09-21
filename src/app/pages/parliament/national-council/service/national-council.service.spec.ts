import { TestBed, inject } from '@angular/core/testing';

import { NationalCouncilService } from './national-council.service';

describe('NationalCouncilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalCouncilService]
    });
  });

  it('should be created', inject([NationalCouncilService], (service: NationalCouncilService) => {
    expect(service).toBeTruthy();
  }));
});
