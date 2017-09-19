
import { AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import { PoliticianModel } from "../../model/politician.model";
import {Observable} from "rxjs/Observable";
import {Helper} from "../../util/helper.service";

@Component({
  selector: 'profil',
  styleUrls: ['./profil.scss'],
  templateUrl: './profil.html'
})
export class Profil implements AfterViewInit {

  @Input() politicanModel: PoliticianModel;

  constructor(private _helper: Helper) {
  }

  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }
}
