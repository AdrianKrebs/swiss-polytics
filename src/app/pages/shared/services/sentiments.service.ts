import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Helper } from '../../util/helper.service';
import { APP_CONFIG } from '../../../app-config.constants';
import { IAppConfig } from '../../../app-config.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RawSentiment } from '../../model/rawsentiment.model';
import * as R from 'ramda';

@Injectable()
export class SentimentsService {

  constructor(private http: Http, private helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getSentiments(query: string): Observable<RawSentiment[]> {
    return this.http.get(`${this.config.BACKEND_URL}/sentiments${query}`)
      .map(this.helper.extractData)
      .map((dataInHolder) => dataInHolder.sentiments)
      .map((sentiments) => R.map((sentiment) => new RawSentiment(
        sentiment.user.id,
        sentiment.tweet.sentiment.label,
        sentiment.tweet.sentiment.score,
        new Date(sentiment.createdAt)), sentiments))
      .catch(this.helper.handleError);
  }
}
