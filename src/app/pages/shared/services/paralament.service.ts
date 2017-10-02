import {Inject, Injectable} from '@angular/core';
import {BaThemeConfigProvider, ColorHelper} from '../../../theme';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import {IAppConfig} from '../../../app-config.interface';
import {APP_CONFIG} from '../../../app-config.constants';
import {Helper} from '../../util/helper.service';
import {PartyModel} from '../../model/party.model';
import {MAPPING} from '../../util/mapping';
import {PoliticianModel} from "../../model/politician.model";

@Injectable()
export class ParlamentService {


  constructor(private http: Http, public helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  getPoliticanInfos(id): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/councillor/' + id)
      .map(this.helper.extractData)
      .map((result) => result.data)
      .catch(this.helper.handleError);
  }

  getFactionInfos(party: PartyModel): Observable<PoliticianModel[]> {
    return this.http.get(this.config.BACKEND_URL + '/faction/' + party.faction)
      .map(this.helper.extractData)
      .map((result) => {
        result.data.members.forEach((member) => {
          const fromMapping = this.helper.getUserByPersonId(member.id);
          member.twitterName = fromMapping.twitterName;
          member.twitterId = fromMapping.id;
          member.hasTwitter = fromMapping.twitterName && fromMapping.id ? 'Ja' : 'Nein';
        })
        return result.data.members;
      })
      .map((data) => {
        data.sort((a, b) => {
          return a.twitterName && b.twitterName ? 0 : a.twitterName ? -1 : 1;
        });
        return data;
      })
      .catch(this.helper.handleError);
  }

}
