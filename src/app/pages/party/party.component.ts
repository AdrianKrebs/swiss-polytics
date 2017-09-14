import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from "rxjs/Observable";
import {PoliticianModel} from "../model/politician.model";
import {ParlamentService} from "../shared/services/paralament.service";
import 'rxjs/add/operator/switchMap';
import {PartyModel} from "../model/party.model";

@Component({
  selector: 'party',
  styleUrls: ['./party.scss'],
  templateUrl: './party.html'
})
export class Party implements AfterViewInit, OnInit{

  politicians$: Observable<PoliticianModel[]>;
  private selectedId: string;

  constructor( private service: ParlamentService,
               private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.politicians$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = params.get('id');
        return this.service.getFactionInfos(new PartyModel(this.selectedId));
      });

    this.service.getFactionInfos(new PartyModel("SVP")).subscribe((data) => {
      console.log("got a response");
      console.log(data);

    })
  }

  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit () { //TODO auslagern
    (function(d,s,id){
      var js: any,
        fjs=d.getElementsByTagName(s)[0],
        p='https';
      //if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
     // }
    })
    (document,"script","twitter-wjs");
  }

}
