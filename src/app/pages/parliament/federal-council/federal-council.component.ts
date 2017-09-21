import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { SeatModel } from './service/federal-council.model';
import { FederalCouncilService } from './service/federal-council.service';


@Component({
  selector: 'app-federal-council',
  templateUrl: './federal-council.component.html',
  styleUrls: ['./federal-council.component.scss'],
  providers: [FederalCouncilService],
})

export class FederalCouncilComponent implements OnInit {
 
  seats;

  getSeats(): void {
    this.seats = this.federalCouncilService.getSeats();
  }

  constructor(private federalCouncilService: FederalCouncilService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSeats();
  }

  goToProfile(personId) {
    //console.log('personId ' + personId + ' geklickt.');
    window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
  }

  navigateToProfile(personId) {
    this.router.navigate(['/pages/politician/' + personId]);
  }

  markAsSelected() {

  }

}