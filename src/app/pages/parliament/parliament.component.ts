import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {Helper} from '../util/helper.service';

@Component({
  selector: 'parliament',
  styleUrls: ['./parliament.scss'],
  templateUrl: './parliament.html',
})
export class Parliament implements AfterViewInit{

  constructor(private _helper: Helper) {
  }


  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }

}
