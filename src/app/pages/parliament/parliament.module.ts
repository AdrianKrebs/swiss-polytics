import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Parliament } from './parliament.component';
import { routing }       from './parliament.routing';

import { Tile } from '../dashboard/tile/tile.component';
import {Helper} from "../util/helper.service";
import {TileService} from "../dashboard/tile/tile.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Parliament
  ],
  providers: [
    TileService,
    Helper
  ]
})
export class ParliamentModule {}
