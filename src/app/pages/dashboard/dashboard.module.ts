import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { Tile } from './tile';
import { TrafficChart } from './trafficChart';
import { LineChart } from './lineChart';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { LineChartService } from './lineChart/lineChart.service';
import { TileService } from './tile/tile.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import {Helper} from "../util/helper.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    PopularApp,
    Tile,
    TrafficChart,
    LineChart,
    Calendar,
    Dashboard
  ],
  providers: [
    CalendarService,
    LineChartService,
    TileService,
    TrafficChartService,
    Helper
  ]
})
export class DashboardModule {}
