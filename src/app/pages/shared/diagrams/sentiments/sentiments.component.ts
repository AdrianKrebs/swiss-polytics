import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColorHelper, layoutPaths } from '../../../../theme';
import { BaThemeConfigProvider } from '../../../../theme/theme.configProvider';
import { SentimentsService } from '../../services/sentiments.service';
import { SentimentsTransformerService } from './sentiments-transformer.service';
import { RawSentiment } from '../../../model/rawsentiment.model';
import { QueryHelper } from '../queryHelper';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.scss'],
})
export class SentimentsComponent implements OnInit, OnChanges {
  @Input() party: string;
  @Input() politicianId: string;

  private sentimentDataService: SentimentsService;
  private sentimentTransformerService: SentimentsTransformerService;
  private baConfig: BaThemeConfigProvider;
  private chart: any;
  private queryHelper: QueryHelper = new QueryHelper();
  isChartEmpty: boolean;
  sentiments: Object;

  constructor(
    sentimentDataService: SentimentsService,
    sentimentTransformerService: SentimentsTransformerService,
    baconfig: BaThemeConfigProvider) {
    this.sentimentDataService = sentimentDataService;
    this.sentimentTransformerService = sentimentTransformerService;
    this.baConfig = baconfig;
  }

  ngOnInit() {
    this.sentiments = this.getData();
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['party'] || changes['politicianId']) {
      this.loadData();
    }
  }

  private loadData() {
    this.sentimentDataService.getSentiments(this.queryHelper.createQueryString(this.party, this.politicianId)).
    subscribe((sentiments: RawSentiment[]) => {
      if (this.chart) {
        this.chart.dataProvider = this.sentimentTransformerService.orderedSumPerDay(sentiments);
        this.chart.validateData();
      }
      const filtered = this.chart.dataProvider.filter((data) => data.negative || data.positive || data.mean);
      if (filtered.length < 2) {
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
    const positiveColor = this.baConfig.get().colors.dashboard.green;
    const meanColor = this.baConfig.get().colors.dashboard.yellow;

    return {
      type: 'serial',
      theme: 'blur',
      fontFamily: 'Roboto',
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
          lineColor: positiveColor,
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'positive',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: ColorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'negative',
          fillAlphas: 1,
          fillColorsField: 'lineColor',
        },
        {
          id: 'g2',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: meanColor,
          lineThickness: 1,
          negativeLineColor: meanColor,
          type: 'smoothedLine',
          valueField: 'mean',
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
