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

  getUsersToday(): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/tweets/users/count')
      .map(this.helper.extractData)
      .map((result) => result.users)
      .catch(this.helper.handleError);
  }

  getTweetsToday(): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/tweets/count')
      .map(this.helper.extractData)
      .map((result) => result.tweets)
      .catch(this.helper.handleError);
  }

  getTrendingTopics(): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/trending')
      .map(this.helper.extractData)
      .map((result) => result.trending)
      .catch(this.helper.handleError);
  }

}
