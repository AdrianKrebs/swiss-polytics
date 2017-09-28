import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Helper } from '../../util/helper.service';
import { APP_CONFIG } from '../../../app-config.constants';
import { IAppConfig } from '../../../app-config.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RawMention } from '../../model/rawmention.model';
import { MentionCount } from '../../model/mentioncount.model';
import * as R from 'ramda';

@Injectable()
export class MentionsService {

  constructor(private http: Http, private helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getMentions(query: string): Observable<RawMention[]> {
    return this.http.get(`${this.config.BACKEND_URL}/mentions${query}`)
      .map(this.helper.extractData)
      .map((dataInHolder) => dataInHolder.mentions)
      .map((mentions) => R.map((mention) =>
        new RawMention(mention.tweetId, mention.twitterUserId, new Date(mention.createdAt)), mentions))
      .catch(this.helper.handleError);
  }

  getMentionCountsForLastWeek(): Observable<MentionCount[]> {
    return this.http.get(`${this.config.BACKEND_URL}/mentions/countLastWeek`)
      .map(this.helper.extractData)
      .map((dataInHolder) => dataInHolder.counts)
      .map((counts) => R.map(count => new MentionCount(count._id, count.count), counts))
      .catch(this.helper.handleError);
  }
}
