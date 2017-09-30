import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tile } from './tile/tile.component';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Helper } from 'app/pages/util/helper.service';
import { TileService } from './tile/tile.service';
import { ParlamentService } from './services/paralament.service';
import { SentimentsComponent } from './diagrams/sentiments/sentiments.component';
import { MentionsComponent } from './diagrams/mentions/mentions.component';
import { MentionsService } from './services/mentions.service';
import { SentimentsService } from './services/sentiments.service';
import { SentimentsTransformerService } from './diagrams/sentiments/sentiments-transformer.service';
import { MentionsTransformerService } from './diagrams/mentions/mentions-transformer.service';
import { Feed } from './feed/feed.component';
import {SeatComponent} from './seat/seat.component';
import { DefaultModal } from './seat/default-modal/default-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgbModalModule,
    NgaModule],
  declarations: [
    Feed,
    SeatComponent,
    Tile,
    SentimentsComponent,
    DefaultModal,
    MentionsComponent],
  exports: [
    Feed,
    SeatComponent,
    Tile,
    SentimentsComponent,
    MentionsComponent,
    CommonModule,
    FormsModule],
  entryComponents: [
      DefaultModal,
    ],
  providers: [
    TileService,
    ParlamentService,
    Helper,
    MentionsService,
    SentimentsService,
    SentimentsTransformerService,
    MentionsTransformerService,
  ],
})
export class SharedModule {
}
