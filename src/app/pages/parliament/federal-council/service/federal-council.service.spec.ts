import { TestBed, inject } from '@angular/core/testing';

import { FederalCouncilService } from './federal-council.service';

describe('FederalCouncilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FederalCouncilService]
    });
  });

  it('should be created', inject([FederalCouncilService], (service: FederalCouncilService) => {
    expect(service).toBeTruthy();
  }));
});
