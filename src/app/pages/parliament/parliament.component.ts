import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Helper} from '../util/helper.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'parliament',
  styleUrls: ['./parliament.scss'],
  templateUrl: './parliament.html',
})
export class Parliament implements AfterViewInit {
  public councilFilter: string = 'BV';


  constructor(private _helper: Helper) {
  }

  ngAfterViewInit() {
    this._helper.initTwitterWidget();
  }

}
