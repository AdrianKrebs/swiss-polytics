import {Component, OnInit} from '@angular/core';

import {PieChartService} from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import {BaThemeConfigProvider} from "../../../theme/theme.configProvider";

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss']
})


export class PieChart implements OnInit{


  public tiles: Array<Object> = [];
  private _init = false;

  private usersToday: Number;
  private tweetsToday: Number;
  private trendingTopics: Array<String>;
  private pieColor: any;

  private data: Array<any>;

  constructor(private _pieChartService: PieChartService, private _baConfig: BaThemeConfigProvider){
    //this.charts = this.data;
    this.pieColor = this._baConfig.get().colors.custom.dashboardPieChart;

  }

  ngOnInit(): void {
    this._pieChartService.getUsersToday().subscribe((data) => {
      this.usersToday = data;
      this.tiles.push({
        color: this.pieColor,
        description: 'Tweeters Today',
        stats: this.usersToday,
        icon: 'user',
      });
    });
    this._pieChartService.getTweetsToday().subscribe((data) => {
      this.tweetsToday = data;
      this.tiles.push({
        color: this.pieColor,
        description: 'Tweets Today',
        stats: this.tweetsToday,
        icon: 'twitter',
      });
    });
    this._pieChartService.getTrendingTopics().subscribe((data) => {
      this.trendingTopics = data.slice(0, 3).map((ele) => '#'+ele);
      // this.tiles.push({
      //   color: this.pieColor,
      //   description: 'Trending Topics',
      //   stats: this.trendingTopics,
      //   icon: 'arrow-up',
      // });
    });

  }

  ngAfterViewInit() {
    if (!this._init) {
      this._init = true;
    }
  }
}
