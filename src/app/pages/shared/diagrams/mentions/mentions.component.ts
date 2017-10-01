import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { layoutPaths } from '../../../../theme';
import { BaThemeConfigProvider } from '../../../../theme/theme.configProvider';
import 'rxjs/add/observable/from';
import { MentionsService } from '../../services/mentions.service';
import { RawMention } from '../../../model/rawmention.model';
import { TableData } from './tableData';
import { MentionsTransformerService } from './mentions-transformer.service';
import { QueryHelper } from '../queryHelper';
import * as R from 'ramda';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss'],
})
export class MentionsComponent implements OnInit, OnChanges {
  @Input() party: string;
  @Input() politicianId: string;

  private mentionsDataService: MentionsService;
  private baConfig: BaThemeConfigProvider;
  private chart: any;
  private queryHelper: QueryHelper = new QueryHelper();
  isChartEmpty: boolean;
  mentions: any;

  constructor(
    mentionsDataService: MentionsService,
    baconfig: BaThemeConfigProvider) {
    this.mentionsDataService = mentionsDataService;
    this.baConfig = baconfig;
  }

  ngOnInit() {
    this.mentions = this.getData();
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['party'] || changes['politicianId']) {
      this.loadData();
    }
  }

  private loadData() {
    this.mentionsDataService.getMentionsAggregateForLastMonth(
      this.queryHelper.createQueryString(this.party, this.politicianId)).
    subscribe((mentionsAggregate: TableData[]) => {
      if (this.chart) {
        this.chart.dataProvider = R.sort((a, b) => a.date.valueOf() - b.date.valueOf(), mentionsAggregate);
        this.chart.validateData();
      }
      if (this.chart.dataProvider.filter((data) => data.value > 0).length < 2) {
        this.isChartEmpty = true;
      }
    });
  }

  chartReady(chart) {
    this.chart = chart;
  }

  private getData() {

    const layoutColors = this.baConfig.get().colors;
    const graphColor = this.baConfig.get().colors.custom.dashboardLineChart;
    const theLineColor = this.baConfig.get().colors.dashboard.green;

    return {
      type: 'serial',
      fontFamily: 'Roboto',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true,
      },
      dataProvider: [],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText,
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText,
        },
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: theLineColor,
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'DD MM',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
      },
      dataDateFormat: 'DD MM YYYY',
      export: {
        enabled: true,
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0,
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart,
    };
  }
}
