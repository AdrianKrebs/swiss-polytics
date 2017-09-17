
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ParlamentService } from "../shared/services/paralament.service";
import { PoliticianModel } from "../model/politician.model";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'politician',
  templateUrl: './politician.html'
})

export class Politician implements OnInit {

  politician$: Observable<PoliticianModel>;
  private selectedPoliticianId: string;
  private selectedPolitician: PoliticianModel;

  constructor(private service: ParlamentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.politician$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedPoliticianId = params.get('id');
        return this.service.getPoliticanInfos(this.selectedPoliticianId);
      });
    this.politician$.subscribe((result) => {
      //console.log(result);
      let p = new PoliticianModel().mapJsonToPolitican(result);
      this.selectedPolitician = p;
    });
  }
}