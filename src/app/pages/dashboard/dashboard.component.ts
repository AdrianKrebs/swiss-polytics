import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {TileService} from "../shared/tile/tile.service";
import {MAPPING} from "../util/mapping";
import {Politician} from "../politician/politician.component";
import {PoliticianModel} from "../model/politician.model";
import {Router} from "@angular/router";
import {Helper} from "../util/helper.service";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements AfterViewInit, OnInit {

  public trendingTopics: Array<String>;
  public mostActiveUsers: Array<PoliticianModel>;

  constructor(private _tileService: TileService,private _helper: Helper, private router: Router) {
  }

  ngOnInit(): void {

    this._tileService.getTrendingTopicsWeekly().subscribe((data) => {
      this.trendingTopics = data.slice(0, 10).map((ele) => '#' + ele);
    });

    this._tileService.getMostActiveUsers().subscribe((data) => {
      this.mostActiveUsers = data.map((user) => {
        let politician = new PoliticianModel();
        let p = this._helper.getUserByTwitterId(user._id);
        politician.person_id = p['person_id'];
        politician.party = p['party'];
        politician.firstName = p['name'];
        politician.count = user.count;
        return politician;
      });
    })
  }


  navigateToProfile(id) {
    console.log('navigating to profile');
    this.router.navigate(['/pages/politician/'+id]);
  }

  navigateToParty(party) {
    this.router.navigate(['/pages/party/'+party]);
  }

  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }
}
