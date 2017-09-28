import { Injectable } from '@angular/core';

import { SeatModel } from "../../../model/seat.model";
import { SEATS } from './national-council.data';

@Injectable()
export class NationalCouncilService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}
