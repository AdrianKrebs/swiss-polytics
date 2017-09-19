import { Injectable } from '@angular/core';

import { SeatModel } from './federal-assembly.model';
import { SEATS } from './federal-assembly.data';

@Injectable()
export class FederalAssemblyService {

  getSeats(): SeatModel[] {
    return SEATS;
  }
  constructor() { }

}
