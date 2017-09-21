import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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