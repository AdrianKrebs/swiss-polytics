import {
  AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef,
  ApplicationRef,
} from '@angular/core';
import {Helper} from '../../util/helper.service';
import {PoliticianModel} from '../../model/politician.model';


@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class Feed implements AfterViewInit, OnChanges, OnInit {
  @Input() selectedParty: String;
  @Input() twitterName: String;

  constructor(private _helper: Helper) {
  }

  ngAfterViewInit(): void {

    if (this.twitterName) {
      this._helper.reInitTwitterWidget('https://twitter.com/' + this.twitterName);
    } else if (this.selectedParty) {
      this._helper.reInitTwitterWidget('https://twitter.com/swiss_polytics/lists/' + this.selectedParty);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedParty']) {
      this._helper.reInitTwitterWidget('https://twitter.com/swiss_polytics/lists/' + this.selectedParty)
    }
    if (changes['twitterName']) {
      this._helper.reInitTwitterWidget('https://twitter.com/' + this.twitterName);
    }
  }

  ngOnInit() {
  }

}
