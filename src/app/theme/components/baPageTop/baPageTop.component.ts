import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {PERSONID_TO_NAME_MAPPING} from "app/pages/util/personId-to-name";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  protected searchStr: string;
  protected captain: string;

  protected captains = PERSONID_TO_NAME_MAPPING.map((user) => user["name"]);

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public startSearch(){


    console.log('start searching');
  }

  public onKeyup($event) {
    if ($event.code === "Enter") {
      console.log('enter pressed --- routing to party or politician '+ $event.target.value);
    }


  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
