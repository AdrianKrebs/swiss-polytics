import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { colorHelper, layoutPaths } from '../../../../theme';
import { BaThemeConfigProvider } from '../../../../theme/theme.configProvider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { MentionsService } from '../../services/mentions.service';
import { RawMention } from '../../../model/rawmention.model';
import { TableData } from './tableData';
import { MentionsTransformerService } from './mentions-transformer.service';
import { QueryHelper } from '../queryHelper';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss']
})
export class MentionsComponent implements OnInit, OnChanges {
  @Input() party: string;
  @Input() politicianId: string;

  private mentionsDataService: MentionsService;
  private mentionsTransformerService: MentionsTransformerService;
  private baConfig: BaThemeConfigProvider;
  private chart: any;
  private queryHelper: QueryHelper = new QueryHelper();

  mentions: any;

  constructor(
    mentionsDataService: MentionsService,
    transformationService: MentionsTransformerService,
    baconfig: BaThemeConfigProvider) {
    this.mentionsDataService = mentionsDataService;
    this.mentionsTransformerService = transformationService;
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
    this.mentionsDataService.getMentions(this.queryHelper.createQueryString(this.party, this.politicianId)).
    subscribe((mentionsData: RawMention[]) => {
      this.chart.dataProvider = this.mentionsTransformerService.orderedSumPerDay(mentionsData);
      this.chart.validateData();
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
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      titles: [{
        text: 'Mentions'
      }],
      dataProvider: [],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
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
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'DD MM',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'DD MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
