import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PopularApp } from './popularApp';
import { TrafficChart } from './trafficChart';
import { Calendar } from './calendar';
import { CalendarService } from './calendar/calendar.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import {Helper} from "../util/helper.service";
import {SharedModule} from "../shared/shared.module";
import {TileService} from "../shared/tile/tile.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    SharedModule
  ],
  declarations: [
    PopularApp,
    TrafficChart,
    Calendar,
    Dashboard
  ],
  providers: [
    CalendarService,
    TileService,
    TrafficChartService,
    Helper
  ]
})
export class DashboardModule {}
