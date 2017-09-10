import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {Tile} from "./tile/tile.component";
import {AppTranslationModule} from "../../app.translation.module";
import {NgaModule} from "../../theme/nga.module";
import {Helper} from "app/pages/util/helper.service";
import {TileService} from "./tile/tile.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule],
  declarations: [Tile],
  exports: [Tile,
    CommonModule, FormsModule],
  providers: [
    TileService,
    Helper
  ]
})
export class SharedModule {
}
