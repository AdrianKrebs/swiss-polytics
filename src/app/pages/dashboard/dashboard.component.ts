import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {TileService} from '../shared/tile/tile.service';
import {MAPPING} from '../util/mapping';
import {Politician} from '../politician/politician.component';
import {PoliticianModel} from '../model/politician.model';
import {Router} from '@angular/router';
import {Helper} from '../util/helper.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard implements AfterViewInit, OnInit {

  public trendingTopics: Array<String>;
  public mostActiveUsers: Array<PoliticianModel>;

  constructor(private _tileService: TileService, private _helper: Helper, private router: Router) {
  }

  ngOnInit(): void {

    this._tileService.getTrendingTopicsWeekly().subscribe((data) => {
      this.trendingTopics = data.slice(0, 10);
    });

    this._tileService.getMostActiveUsers(10).subscribe((data) => {
      this.mostActiveUsers = data.map((user) => {
        const politician = new PoliticianModel();
        const p = this._helper.getUserByTwitterId(user._id);
        politician.personId = p['personId'];
        politician.party = p['party'];
        politician.firstName = p['name'];
        politician.count = user.count;
        return politician;
      });
    })
  }


  navigateToProfile(id) {
    this.router.navigate(['/pages/politician/' + id]);
  }

  navigateToParty(party) {
    this.router.navigate(['/pages/party/' + party]);
  }

  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }
}
