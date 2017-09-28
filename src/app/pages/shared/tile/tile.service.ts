import {Inject, Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {IAppConfig} from "../../../app-config.interface";
import {APP_CONFIG} from "../../../app-config.constants";
import {Helper} from "../../util/helper.service";

@Injectable()
export class TileService {

  constructor(private http: Http, public helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  getUsersToday(queryParmas): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/tweets/users/count'+queryParmas)
      .map(this.helper.extractData)
      .map((result) => result.users)
      .catch(this.helper.handleError);
  }

  getTweetsToday(queryParmas): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/tweets/count'+queryParmas)
      .map(this.helper.extractData)
      .map((result) => result.tweets)
      .catch(this.helper.handleError);
  }

  getTrendingTopics(queryParmas): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/trending'+queryParmas)
      .map(this.helper.extractData)
      .map((result) => result.trending)
      .catch(this.helper.handleError);
  }

  getTrendingTopicsWeekly(): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/trending/weekly')
      .map(this.helper.extractData)
      .map((result) => result.trending)
      .catch(this.helper.handleError);
  }

  getMostActiveUsers(limit?: string): Observable<any> {
    let queryParms;
    if (limit) {
      queryParms = "?limit="+limit;
    }
    return this.http.get(this.config.BACKEND_URL + '/tweets/count/weekly'+queryParms)
      .map(this.helper.extractData)
      .map((result) => result.users)
      .catch(this.helper.handleError);
  }



}
