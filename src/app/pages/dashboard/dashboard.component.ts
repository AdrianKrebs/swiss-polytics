import {AfterViewChecked, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements AfterViewInit{

  constructor() {
  }


  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit () {
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
