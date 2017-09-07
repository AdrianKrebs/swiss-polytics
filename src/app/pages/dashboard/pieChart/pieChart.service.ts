import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Trending Words',
        stats: '#AHV, #IV',
        icon: 'arrow-up',
      }, {
        color: pieColor,
        description: 'Tweets Today',
        stats: '89,745',
        icon: 'twitter',
      }, {
        color: pieColor,
        description: 'Tweeters Today',
        stats: '178,391',
        icon: 'user',
      }];
  }
}
