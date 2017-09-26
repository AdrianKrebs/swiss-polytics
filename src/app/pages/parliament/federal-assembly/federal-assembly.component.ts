import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { MAPPING } from '../../util/mapping';

import { SeatModel } from './service/federal-assembly.model';
import { FederalAssemblyService } from './service/federal-assembly.service';

import { Helper } from '../../util/helper.service';
import { ParlamentService } from '../../shared/services/paralament.service';

import { TileService } from '../../shared/tile/tile.service';

@Component({
  selector: 'app-federal-assembly',
  templateUrl: './federal-assembly.component.html',
  styleUrls: ['./federal-assembly.component.scss'],
  providers: [FederalAssemblyService],
})

export class FederalAssemblyComponent implements OnInit {

  // private tweetsToday: Number;
  private seats;
  private usersToday;
  private selectedSeat: SeatModel;


  getSeats(): void {
    this.seats = this.federalAssemblyService.getSeats();
  }

  updateSeats() {
    //this.seats
    //getTweetsToday
  }

  getTwitterData(politicianId) {
    let queryParmas = '';
    if (politicianId) {
      queryParmas = '?politicianId=' + politicianId;
      this.tileService.getTweetsToday(queryParmas).subscribe((data) => {
        // console.log(data);
        return data.tweets;
      });
    }
  }


  getIndexForPersonId(id) {
    return this.helperService.getIndexForPersonId(id);
  }

  getPoliticanInfos(id) {
    return this.parlamentService.getPoliticanInfos(id);
  }

  constructor(private federalAssemblyService: FederalAssemblyService,
    private route: ActivatedRoute,
    private router: Router,
    private helperService: Helper,
    private parlamentService: ParlamentService,
    private tileService: TileService) { }

  ngOnInit(): void {

    this.getSeats();
    // TODO
    // this.getTweetsPerPolitician();
    this.seats.forEach(seat => {

      seat.mappingIndex = this.getIndexForPersonId(seat.personId);

      if (seat.mappingIndex !== -1) {
        seat.party = MAPPING[seat.mappingIndex].party;
        seat.twitterId = MAPPING[seat.mappingIndex].id;
      }

      seat.numberOfTweets = 0;
      // seat.numberOfTweets = this.getTwitterData(seat.personId);

      /*
      if (seat.twitterId !== undefined) {
        let queryParmas = '';
        // queryParmas = '?politicianId=' + seat.personId;
        this.tileService.getTweetsToday(queryParmas).subscribe((data) => {
          // console.log(data);
          // seat.numberOfTweets = data;
          seat.numberOfTweets = data.tweets + (Math.random() * 20);
          this.seats = Array.from(this.seats);
        });
      }
      */

      // TODO
      // Anzahl Tweets pro Tag und Politiker einfügen
      seat.numberOfTweets = (Math.random() * 20);

      if (seat.twitterId !== undefined) {
        seat.twitterClass = 'has-no-twitter-account';
      } else {
        seat.twitterClass = 'has-twitter-account';
      }

      if (seat.numberOfTweets < 1) {
        seat.activityClass = 'no-activity';
      } else if (seat.numberOfTweets < 5) {
        seat.activityClass = 'low-activity';
      } else if (seat.numberOfTweets < 10) {
        seat.activityClass = 'medium-activity';
      } else {
        seat.activityClass = 'high-activity';
      }
    });
  }


  navigateToProfile(personId) {
    this.router.navigate(['/pages/politician/' + personId]);
  }

  showPreview(personId) {
    this.router.navigate(['/pages/politician/' + personId]);
  }

  setSelectedSeat(seat) {
    // console.log(seat);
    this.selectedSeat = seat;
  }

}
