import { Component, OnInit } from '@angular/core';
import { colorHelper, layoutPaths } from '../../../../theme';
import { BaThemeConfigProvider } from '../../../../theme/theme.configProvider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { MentionsService } from '../../services/mentions.service';
import { RawMention } from '../../../model/rawmention.model';
import { TableData } from './tableData';
import { MentionsTransformerService } from './mentions-transformer.service';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss']
})
export class MentionsComponent implements OnInit {
  private mentionsDataService: MentionsService;
  private mentionsTransformerService: MentionsTransformerService;
  private baConfig: BaThemeConfigProvider;
  private chart: any;

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
    this.mentionsDataService.getMentions().subscribe((mentionsData: RawMention[]) => {
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

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
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
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
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
