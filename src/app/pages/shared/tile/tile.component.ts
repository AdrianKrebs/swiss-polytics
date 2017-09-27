import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {TileService} from './tile.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import {BaThemeConfigProvider} from "../../../theme/theme.configProvider";
import {PartyModel} from "../../model/party.model";

@Component({
  selector: 'tile',
  templateUrl: './tile.html',
  styleUrls: ['./tile.scss']
})


export class Tile implements OnInit, OnChanges{


  @Input() politicianId: String;
  @Input() party: String;
  private _init = false;

  private usersToday: Number;
  public tweetsToday: Number;
  public trendingTopics: Array<String>;
  private pieColor: any;

  constructor(private _pieChartService: TileService, private _baConfig: BaThemeConfigProvider){
    //this.charts = this.data;
    this.pieColor = this._baConfig.get().colors.custom.dashboardPieChart;

  }

  ngOnInit(): void {
    this.loadTileData();

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['party']) {
      this.loadTileData();
    }
    if (changes['politicianId']) {
      this.loadTileData();
    }

  }


  loadTileData() {
    let queryParmas = '';
    if(this.politicianId) {
      queryParmas = '?politicianId='+this.politicianId;
    } else if (this.party) {
      queryParmas = '?party='+this.party;
    }

    if(!this.politicianId) {
      this._pieChartService.getUsersToday(queryParmas).subscribe((data) => {
        this.usersToday = data;
      });
    }
    this._pieChartService.getTweetsToday(queryParmas).subscribe((data) => {
      this.tweetsToday = data;
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
