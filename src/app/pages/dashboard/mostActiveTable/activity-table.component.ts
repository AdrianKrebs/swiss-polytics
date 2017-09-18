import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PoliticianModel} from "../../model/politician.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'activity-table',
  templateUrl: './activity-table.html',
  styleUrls: ['./activity-table.scss']
})
export class ActivityTable {

  @Input() users: Array<PoliticianModel>;
  @Output() onNavigateToProfile = new EventEmitter<String>();

  constructor() {

  }

  navigateToProfile(id) {

    this.onNavigateToProfile.emit(id)
  }
}
