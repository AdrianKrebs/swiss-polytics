import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PoliticianModel} from "../../model/politician.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'politician-table',
  templateUrl: './politician-table.html',
  styleUrls: ['./politician-table.scss']
})
export class PoliticianTable {

  @Input() politicians: Observable<PoliticianModel[]>;
  @Output() onNavigateToProfile = new EventEmitter<String>();

  constructor() {

  }

  navigateToProfile(id) {

    this.onNavigateToProfile.emit(id)
  }
}
