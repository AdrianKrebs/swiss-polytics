import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../../app.translation.module';
import { NgaModule } from '../../../theme/nga.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { Profil } from './profil.component';
import { routing }       from './profil.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    SlimLoadingBarModule.forRoot(),
    routing
  ],
  declarations: [
    Profil
  ],
  providers: [
  ]
})
export class ProfilModule {}