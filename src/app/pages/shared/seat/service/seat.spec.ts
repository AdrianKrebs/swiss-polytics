import { TestBed, inject } from '@angular/core/testing';

import { SeatService } from './seat.service';

describe('CouncilOfStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeatService],
    });
  });

  it('should be created', inject([SeatService], (service: SeatService) => {
    expect(service).toBeTruthy();
  }));
});
