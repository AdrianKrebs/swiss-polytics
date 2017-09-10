/**
 * Created by Adrian on 9/10/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class Helper {
  constructor(private http: Http) {

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

}
