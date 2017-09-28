import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tile } from './tile/tile.component';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule],
  declarations: [
    Feed,
    SeatComponent,
    Tile,
    SentimentsComponent,
    MentionsComponent],
  exports: [
    Feed,
    SeatComponent,
    Tile,
    SentimentsComponent,
    MentionsComponent,
    CommonModule,
    FormsModule],
  providers: [
    TileService,
    ParlamentService,
    Helper,
    MentionsService,
    SentimentsService,
    SentimentsTransformerService,
    MentionsTransformerService
  ]
})
export class SharedModule {
}
