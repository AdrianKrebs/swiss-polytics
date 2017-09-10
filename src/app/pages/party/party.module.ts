import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Party } from './party.component';
import { routing }       from './party.routing';

import {Helper} from "../util/helper.service";
import {DashboardModule} from "../dashboard/dashboard.module";
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
    Party
  ],
  providers: [
    TileService,
    Helper
  ]
})
export class PartyModule {}
