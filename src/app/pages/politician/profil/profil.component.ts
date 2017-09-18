
import { AfterViewChecked, AfterViewInit, Component, Input } from '@angular/core';
import { PoliticianModel } from "../../model/politician.model";

@Component({
  selector: 'profil',
  styleUrls: ['./profil.scss'],
  templateUrl: './profil.html'
})
export class Profil implements AfterViewInit {

  @Input() politicanModel: PoliticianModel

  constructor() {
  }

  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit() {
    (function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      //if(!d.getElementById(id)){
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      // }
    })
      (document, "script", "twitter-wjs");
  }
}
