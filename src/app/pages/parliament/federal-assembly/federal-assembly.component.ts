import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MAPPING } from '../../util/mapping';
import { FederalAssemblyService } from './service/federal-assembly.service';
import { Helper } from '../../util/helper.service';
import { TileService } from '../../shared/tile/tile.service';
import { SeatModel } from "../../model/seat.model";

@Component({
  selector: 'app-federal-assembly',
  templateUrl: './federal-assembly.component.html',
  styleUrls: ['./federal-assembly.component.scss'],
  providers: [FederalAssemblyService],
})

export class FederalAssemblyComponent implements OnInit {

  private seats;
  private selectedSeat: SeatModel;
  private userActivity = [];


  constructor(private federalAssemblyService: FederalAssemblyService,
    private route: ActivatedRoute,
    private router: Router,
    private helperService: Helper,
    private tileService: TileService) { }

  ngOnInit(): void {
    this.getSeats();
    this.getUserActivity();
  }

  getUserActivity() {
    this.tileService.getMostActiveUsers(100).subscribe((data) => {
      this.userActivity = data;

      // Wird ausgeführt, sobald die Daten geladen sind.

      this.seats.forEach(seat => {

        seat.mappingIndex = this.getIndexForPersonId(seat.personId);

        if (seat.mappingIndex !== -1) {
          seat.party = MAPPING[seat.mappingIndex].party;
          seat.twitterId = MAPPING[seat.mappingIndex].id;
          seat.name = MAPPING[seat.mappingIndex].name;
          seat.number = MAPPING[seat.mappingIndex].number;
        }

        seat.numberOfTweets = 0;

        // Anzahl Tweets pro Tag und Politiker einfügen
        if (seat.twitterId !== undefined) {
          seat.twitterClass = 'has-no-twitter-account';
          let userActivity = this.userActivity.find((obj) => obj._id === seat.twitterId);
          seat.numberOfTweets = userActivity ? userActivity.count : 0;
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

    });
  }

  getSeats(): void {
    this.seats = this.federalAssemblyService.getSeats();
  }

  getIndexForPersonId(id) {
    return this.helperService.getIndexForPersonId(id);
  }

  navigateToProfile(personId) {
    this.router.navigate(['/pages/politician/' + personId]);
  }

  setSelectedSeat(seat) {
    this.selectedSeat = seat;
  }
}
