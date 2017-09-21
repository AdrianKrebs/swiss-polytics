import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { SeatModel } from './service/council-of-states.model';
import { CouncilOfStatesService } from './service/council-of-states.service';


@Component({
  selector: 'app-council-of-states',
  templateUrl: './council-of-states.component.html',
  styleUrls: ['./council-of-states.component.scss'],
  providers: [CouncilOfStatesService],
})

export class CouncilOfStatesComponent implements OnInit {
 
  seats;

  getSeats(): void {
    this.seats = this.federalAssemblyService.getSeats();
  }

  constructor(private federalAssemblyService: CouncilOfStatesService, 
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSeats();
  }

  goToProfile(personId) {
    //console.log('personId ' + personId + ' geklickt.');
    window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
  }

  navigateToProfile(personId){
    this.router.navigate(['/pages/politician/' + personId]);
  }

  markAsSelected() {

  }

}