import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {TileService} from "../shared/tile/tile.service";
import {MAPPING} from "../util/mapping";

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements AfterViewInit, OnInit {

  private trendingTopics: Array<String>;
  private mostActive: Array<Object>;

  constructor(private _tileService: TileService) {
  }

  ngOnInit(): void {

    this._tileService.getTrendingTopicsWeekly().subscribe((data) => {
      this.trendingTopics = data.slice(0, 10).map((ele) => '#' + ele);
    });

    this._tileService.getMostActiveUsers().subscribe((data) => {
      this.mostActive = [
        {user: this.getNameByUser(data.id), count: data.count}
      ]
    })
  }

  getNameByUser(id) {
    return MAPPING.find((user) => user.id === id)['name'];


  }


  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit() {
    (function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      //if(!d.getElementById(id)){
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      // }
    })
    (document, "script", "twitter-wjs");
  }

}
