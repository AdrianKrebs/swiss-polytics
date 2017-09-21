import { Injectable } from '@angular/core';

import { SeatModel } from './council-of-states.model';
import { SEATS } from './council-of-states.data';

@Injectable()
export class CouncilOfStatesService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}
