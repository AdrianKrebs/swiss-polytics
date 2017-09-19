import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Helper } from '../../util/helper.service';
import { APP_CONFIG } from '../../../app-config.constants';
import { IAppConfig } from '../../../app-config.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RawSentiment } from '../../model/rawsentiment.model';

@Injectable()
export class SentimentsService {

  constructor(private http: Http, private helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getMentions(): Observable<RawSentiment[]> {
    return this.http.get(`${this.config.BACKEND_URL}/sentiments`)
      .map(this.helper.extractData)
      .map((dataInHolder) => dataInHolder.sentiments)
      .map((sentiment) => {
        return {
          twitterUserId: sentiment.user.id,
          sentimentLabel: sentiment.tweet.sentiment.label,
          sentimentScore: sentiment.tweet.sentiment.score,
          createdAt: sentiment.createdAt
        }
      })
      .catch(this.helper.handleError);
  }
}
