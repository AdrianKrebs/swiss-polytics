import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAPPING} from '../../util/mapping';
import {SeatService} from './service/seat.service';
import {Helper} from '../../util/helper.service';
import {TileService} from '../../shared/tile/tile.service';
import {SeatModel} from '../../model/seat.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.html',
  styleUrls: ['./seat.scss'],
  providers: [SeatService],
})

export class SeatComponent implements OnInit, OnChanges {

  @Input() councilFilter: string;

  private seats;
  private selectedSeat: SeatModel;
  private viewbox;
  private council;
  private userActivity = [];

  constructor(private seatService: SeatService,
              private route: ActivatedRoute,
              private router: Router,
              private helperService: Helper,
              private modalService: NgbModal,
              private tileService: TileService) {
  }

  ngOnInit(): void {
    this.getSeats();
    this.getUserActivity();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['councilFilter']) {
      this.getSeats();
      this.getUserActivity();
    }
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
          const userActivity = this.userActivity.find((obj) => obj._id === seat.twitterId);
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
    this.viewbox = '0 0 929.4 646.2';
    if (this.councilFilter === 'SR') {
      this.viewbox = '0 0 599.9 407.5';
      this.council = 'Ständerat';
    } else if (this.councilFilter === 'NR') {
      this.council = 'Nationalrat';
    } else {
      this.council = 'Bundesversammlung';
    }
    this.seats = this.seatService.getSeats(this.councilFilter);
    this.selectedSeat = undefined;
  }

  getIndexForPersonId(id) {
    return this.helperService.getIndexForPersonId(id);
  }

  navigateToProfile() {
    this.router.navigate(['/pages/politician/' + this.selectedSeat.personId]);
  }

  onSeatChange(seat): void {
    this.selectedSeat = seat;
  }
}

