import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Helper } from '../../util/helper.service';
import { APP_CONFIG } from '../../../app-config.constants';
import { IAppConfig } from '../../../app-config.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RawMention } from '../../model/rawmention.model';

@Injectable()
export class MentionsService {

  constructor(private http: Http, private helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) { }

  getMentions(): Observable<RawMention[]> {
    return this.http.get(`${this.config.BACKEND_URL}/mentions`)
      .map(this.helper.extractData)
      .map((dataInHolder) => dataInHolder.mentions)
      .catch(this.helper.handleError);
  }
}
