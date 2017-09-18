import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PoliticianModel} from "../model/politician.model";
import {ParlamentService} from "../shared/services/paralament.service";
import 'rxjs/add/operator/switchMap';
import {PartyModel} from "../model/party.model";
import {Helper} from "../util/helper.service";
import {MAPPING} from "../util/mapping";

@Component({
  selector: 'party',
  styleUrls: ['./party.scss'],
  templateUrl: './party.html'
})
export class Party implements AfterViewInit, OnInit {

  politicians$: Observable<PoliticianModel[]>;
  private selectedParty: string;
  private politicians: Array<any>;

  constructor(private service: ParlamentService, private helper: Helper,
              private route: ActivatedRoute,  private router: Router) {
  }


  ngOnInit() {
    this.politicians$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedParty = params.get('id');

        return this.service.getFactionInfos(new PartyModel(this.selectedParty));
      });
  }

  ngAfterViewInit() {
    this.helper.initTwitterWidget();
  }

  navigateToProfile(id){
    this.router.navigate(['/pages/politician/'+id]);
  }

}
