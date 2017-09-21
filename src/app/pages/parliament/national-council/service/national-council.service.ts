import { Injectable } from '@angular/core';

import { SeatModel } from './national-council.model';
import { SEATS } from './national-council.data';

@Injectable()
export class NationalCouncilService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}
