import {
  AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef,
  ApplicationRef
} from '@angular/core';
import {Helper} from "../../util/helper.service";

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class Feed implements AfterViewInit, OnChanges {
  @Input() selectedParty: String;

  constructor(private _helper: Helper) {
  }

  ngAfterViewInit(): void {


    this._helper.initTwitterWidget();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedParty']) {
      this._helper.initTwitterWidget();    }
  }

  ngOnInit() {
  }

}
