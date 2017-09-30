import {Inject, Injectable} from '@angular/core';
import {BaThemeConfigProvider, ColorHelper} from '../../../theme';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {APP_CONFIG} from '../../../app-config.constants';
import {IAppConfig} from '../../../app-config.interface';
import {Helper} from '../../util/helper.service';


@Injectable()
export class TrafficChartService {


  constructor(private http: Http,
              public helper: Helper, @Inject(APP_CONFIG)
              private config: IAppConfig) {
  }


  getTweetsPerParty(): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/tweets/count/party')
      .map(this.helper.extractData)
      .map((result) => result.tweetsPerParty)
      .catch(this.helper.handleError);
  }


}
