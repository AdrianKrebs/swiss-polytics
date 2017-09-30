import {Injectable} from '@angular/core';

import {SeatModel} from '../../../model/seat.model';
import {SEATSSR} from './seatSr.data';
import {SEATSNR} from './seatNr.data';
import {SEATSBV} from './seatBv.data';

@Injectable()
export class SeatService {

  getSeats(councilFilter): SeatModel[] {
    if (councilFilter === 'SR') {
      return SEATSSR;
    }
    if (councilFilter === 'NR') {
      return SEATSNR;
    }
    return SEATSBV;
  }

  constructor() {
  }

}
