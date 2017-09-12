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
export class ParlamentService {

  constructor(private http: Http, public helper: Helper, @Inject(APP_CONFIG) private config: IAppConfig) {
  }

  getPoliticanInfos(id): Observable<any> {
    return this.http.get(this.config.BACKEND_URL + '/councillor/'+id)
      .map(this.helper.extractData)
      .map((result) => [result.data]) //TODO wird hier in array verpackt damit für ngFor gebraucht werden kann
      .catch(this.helper.handleError);
  }

}
