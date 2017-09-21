
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ParlamentService } from "../shared/services/paralament.service";
import { PoliticianModel } from "../model/politician.model";
import 'rxjs/add/operator/switchMap';
import {Helper} from "../util/helper.service";

@Component({
  selector: 'politician',
  templateUrl: './politician.html'
})

export class Politician implements OnInit {

  politician$: Observable<PoliticianModel>;
  politician: PoliticianModel;
  private selectedPoliticianId: Number;

  constructor(private service: ParlamentService, private helper: Helper, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.politician$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedPoliticianId = parseInt(params.get('id'));
        return this.service.getPoliticanInfos(this.selectedPoliticianId);
      }).map((result) => {
        //console.log(result);
        let p = new PoliticianModel().mapJsonToPolitican(result);
        let twitterData = this.getTwitterData(this.selectedPoliticianId);
        p.twitterName = twitterData['name'];
        p.twitterId = twitterData['id'];
        this.helper.initTwitterWidget();
        return p;
      });

    this.politician$.subscribe((result) => {
      this.politician = result;
    });
  }

  getTwitterData(person_id) {
    return this.helper.getUserByPersonId(person_id);
  }

}
