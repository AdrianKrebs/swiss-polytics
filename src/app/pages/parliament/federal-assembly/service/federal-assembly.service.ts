import { Injectable } from '@angular/core';

import { SeatModel } from '../../../model/seat.model';
import { Seats } from './federal-assembly.data';

@Injectable()
export class FederalAssemblyService {

  getSeats(): SeatModel[] {
    return Seats;
  }
  constructor() { }

}
