import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';


import { Politician } from './politician.component';
import { routing }       from './politician.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    JsonpModule,
    routing
  ],
  declarations: [
    Politician
  ],
  providers: [
  ]
})
export class PoliticianModule {}