/**
 * Created by Adrian on 9/10/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MAPPING} from "./mapping";


@Injectable()
export class Helper {
  constructor(private http: Http) {

  }


  getUserByTwitterId(id) {
      return MAPPING.find((user) => user['id'] === id);
  }

  getUserByPersonId(id) {
    return MAPPING.find((user) => user['person_id'] === id);
  }

  getIdsForParty(party) {
    return MAPPING.filter((p) => p.party === party).map((element) => element['person_id']);
  }


  extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    return res.json();
  }

  handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  initTwitterWidget() {
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
