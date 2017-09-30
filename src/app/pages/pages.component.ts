import {Component, OnInit} from '@angular/core';
import {Routes} from '@angular/router';

import {BaMenuService} from '../theme';
import {PAGES_MENU} from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <ul class="al-share clearfix">
          <li><a href="https://twitter.com/swiss_polytics"><i class="socicon socicon-twitter"></i></a></li>
          <li><a href="https://github.com/AdrianKrebs/swiss-poliytics"><i class="socicon socicon-github"></i></a></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `,
})
export class Pages implements OnInit {

  constructor(private _menuService: BaMenuService) {
  }


  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
