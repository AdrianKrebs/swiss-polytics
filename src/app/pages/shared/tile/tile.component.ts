import {Component, Input, OnInit} from '@angular/core';

import {TileService} from './tile.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import {BaThemeConfigProvider} from "../../../theme/theme.configProvider";
import {PartyModel} from "../../model/party.model";

@Component({
  selector: 'tile',
  templateUrl: './tile.html',
  styleUrls: ['./tile.scss']
})


export class Tile implements OnInit{


  @Input() politicianId: String;
  @Input() party: String;

  public tiles: Array<Object> = [];
  private _init = false;

  private usersToday: Number;
  private tweetsToday: Number;
  private trendingTopics: Array<String>;
  private pieColor: any;

  private data: Array<any>;

  constructor(private _pieChartService: TileService, private _baConfig: BaThemeConfigProvider){
    //this.charts = this.data;
    this.pieColor = this._baConfig.get().colors.custom.dashboardPieChart;

  }

  ngOnInit(): void {

    let queryParmas = '';
    if(this.politicianId) {
      queryParmas = '?politicianId='+this.politicianId;
    } else if (this.party) {
      queryParmas = '?party='+this.party;
    }

    if(!this.politicianId) {
      this._pieChartService.getUsersToday(queryParmas).subscribe((data) => {
        this.usersToday = data;
        this.tiles.push({
          color: this.pieColor,
          description: 'Tweeters Today',
          stats: this.usersToday,
          icon: 'user',
        });
      });
    }
    this._pieChartService.getTweetsToday(queryParmas).subscribe((data) => {
      this.tweetsToday = data;
      this.tiles.push({
        color: this.pieColor,
        description: 'Tweets Today',
        stats: this.tweetsToday,
        icon: 'twitter',
      });
    });
    this._pieChartService.getTrendingTopics(queryParmas).subscribe((data) => {
      this.trendingTopics = data.slice(0, 3).map((ele) => '#'+ele);
    });

  }

  ngAfterViewInit() {
    if (!this._init) {
      this._init = true;
    }
  }
}
