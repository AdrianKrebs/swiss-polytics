import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {Router} from '@angular/router';
import {MAPPING} from '../../../pages/util/mapping';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public searchStr: string;
  public searchObject: string;

  protected politicians = MAPPING.map((user) => user['name']);
  protected parties: Array<string> = ['SVP', 'SP', 'CVP', 'FDP', 'BDP', 'GLP', 'GPS']
  public searchData = this.politicians.concat(this.parties);

  constructor(private _state: GlobalState, private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public startSearch() {
    this.navigateToTarget();
  }

  private navigateToTarget() {
    if (this.parties.includes(this.searchObject)) {
      this.router.navigate(['/pages/party/' + this.searchObject]);
    } else {
      this.router.navigate(['/pages/politician/' + this.getIdByName(this.searchObject)]);
    }
  }

  private getIdByName(name) {
    return MAPPING.find((user) => user['name'] === name)['personId'];
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
