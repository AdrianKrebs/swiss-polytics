import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { MAPPING } from '../../util/mapping';
import { SeatModel } from './service/federal-assembly.model';
import { FederalAssemblyService } from './service/federal-assembly.service';

@Component({
  selector: 'app-federal-assembly',
  templateUrl: './federal-assembly.component.html',
  styleUrls: ['./federal-assembly.component.scss'],
  providers: [FederalAssemblyService],
})

export class FederalAssemblyComponent implements OnInit {
 
  seats;

  getSeats(): void {
    this.seats = this.federalAssemblyService.getSeats();
  }

  constructor(private federalAssemblyService: FederalAssemblyService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSeats();
    this.seats.forEach( seat => {
      
      seat.numberOfTweets = (Math.random() * 20 );
      
      if (seat.numberOfTweets < 1) {
        seat.colorCode = 'grey';
      } else if (seat.numberOfTweets < 5) {
        seat.colorCode = 'lightgreen';
      } else if (seat.numberOfTweets < 10) {
        seat.colorCode = 'green';
      } else {
        seat.colorCode = 'darkgreen';
      }
    });
  }

  navigateToProfile(personId) {
    this.router.navigate(['/pages/politician/' + personId]);
  }
}
