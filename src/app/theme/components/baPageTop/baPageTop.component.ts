import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {PERSONID_TO_NAME_MAPPING} from "app/pages/util/personId-to-name";
import {Router} from "@angular/router";
import {MAPPING} from "../../../pages/util/mapping";

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  protected searchStr: string;
  protected searchObject: string;

  protected politicians = PERSONID_TO_NAME_MAPPING.map((user) => user["name"]);
  protected parties = ["SVP","SP","CVP","FDP","BDP","GLP","GPS"]
  protected searchData = this.politicians.concat(this.parties);

  constructor(private _state:GlobalState, private router: Router) {
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
      if (this.parties.includes(this.searchObject)) {
        this.router.navigate(['/pages/party/'+this.searchObject]);
      } else {
        this.router.navigate(['/pages/politician/'+this.getIdByName(this.searchObject)]);
      }
    }


  }

  private getIdByName(name){
    return PERSONID_TO_NAME_MAPPING.find((user) => user['name'] === name)['id'];
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
