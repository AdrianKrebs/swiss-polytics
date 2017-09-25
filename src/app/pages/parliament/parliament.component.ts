import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {Helper} from '../util/helper.service';

@Component({
  selector: 'parliament',
  styleUrls: ['./parliament.scss'],
  templateUrl: './parliament.html',
})
export class Parliament implements AfterViewInit{

    protected councilFilter: String;

  constructor(private _helper: Helper) {
  }

  handleFilterClick($event) {
    this.councilFilter = $event.currentTarget.value;
  }

  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }

}
