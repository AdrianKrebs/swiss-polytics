import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { SeatModel } from './service/national-council.model';
import { NationalCouncilService } from './service/national-council.service';


@Component({
  selector: 'app-national-council',
  templateUrl: './national-council.component.html',
  styleUrls: ['./national-council.component.scss'],
  providers: [NationalCouncilService],
})

export class NationalCouncilComponent implements OnInit {
 
  seats;

  getSeats(): void {
    this.seats = this.nationalCouncilService.getSeats();
  }

  constructor(private nationalCouncilService: NationalCouncilService, 
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