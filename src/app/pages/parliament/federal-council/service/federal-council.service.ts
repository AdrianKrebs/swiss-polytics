import { Injectable } from '@angular/core';

import { SeatModel } from './federal-council.model';
import { SEATS } from './federal-council.data';

@Injectable()
export class FederalCouncilService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}