import {Inject, Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import {IAppConfig} from "../../../app-config.interface";
import {APP_CONFIG} from "../../../app-config.constants";
import {Helper} from "../../util/helper.service";
import {PartyModel} from "../../model/party.model";
import {MAPPING} from "../../util/mapping";

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

  getFactionInfos(party: PartyModel): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/faction/' + party.faction)
      .map(this.helper.extractData)
      .map((result) => {
        return result.data.members.filter((member) => {
          return this.helper.getIdsForParty(party.name).includes(member.id)
        })
      })
      .catch(this.helper.handleError);
  }

}
