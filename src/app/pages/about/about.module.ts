import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';


import {Helper} from "../util/helper.service";
import {SharedModule} from "../shared/shared.module";
import {routing} from "./about.routing";
import {About} from "./about.component";

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
    About
  ],
  providers: [
    Helper
  ]
})
export class AboutModule {}
