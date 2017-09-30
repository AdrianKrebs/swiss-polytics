import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './politician.routing';

import { Politician } from './politician.component';
import { Profil } from './profil/profil.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing,
    SharedModule,
  ],
  declarations: [
    Politician,
    Profil,
  ],
  providers: [
  ],
})
export class PoliticianModule {}
