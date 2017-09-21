import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Parliament } from './parliament.component';
import { routing }       from './parliament.routing';

import {Helper} from "../util/helper.service";
import {TileService} from "../shared/tile/tile.service";
import {SharedModule} from "../shared/shared.module";

import { FederalAssemblyComponent } from './federal-assembly/federal-assembly.component';
import { NationalCouncilComponent } from './national-council/national-council.component';
import { CouncilOfStatesComponent } from './council-of-states/council-of-states.component';
import { FederalCouncilComponent } from './federal-council/federal-council.component';

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
    Parliament,
    FederalAssemblyComponent,
    NationalCouncilComponent,
    CouncilOfStatesComponent,
    FederalCouncilComponent,
  ],
  providers: [
    TileService,
    Helper
  ]
})
export class ParliamentModule {}
