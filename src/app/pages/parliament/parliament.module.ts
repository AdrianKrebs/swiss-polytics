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
  ],
  providers: [
    TileService,
    Helper
  ]
})
export class ParliamentModule {}
