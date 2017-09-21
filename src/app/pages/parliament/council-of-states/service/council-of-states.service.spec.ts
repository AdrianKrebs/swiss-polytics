import { TestBed, inject } from '@angular/core/testing';

import { CouncilOfStatesService } from './council-of-states.service';

describe('CouncilOfStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouncilOfStatesService]
    });
  });

  it('should be created', inject([CouncilOfStatesService], (service: CouncilOfStatesService) => {
    expect(service).toBeTruthy();
  }));
});
