import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {Helper} from "../util/helper.service";

@Component({
  selector: 'parliament',
  styleUrls: ['./parliament.scss'],
  templateUrl: './parliament.html'
})
export class Parliament implements AfterViewChecked{

  constructor(private _helper: Helper) {
  }


  ngAfterViewChecked() {
    this._helper.initTwitterWidget();
  }

}
