import { Injectable } from '@angular/core';

import { SeatModel } from "../../../model/seat.model";
import { SEATS } from './council-of-states.data';

@Injectable()
export class CouncilOfStatesService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}
