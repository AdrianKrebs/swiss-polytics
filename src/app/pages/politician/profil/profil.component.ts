
import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'profil',
  templateUrl: './profil.html'
})


export class Profil implements AfterViewInit {

   
  constructor() {
  }

  // hacky lifecycle hook to load twitter feed
  ngAfterViewInit() {
    (function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      //if(!d.getElementById(id)){
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      // }
    })
      (document, "script", "twitter-wjs");
  }
}

//export class Profil {
 //   constructor(http: Http) {
  //     var id = 4154;
  //     var url = 'http://ws-old.parlament.ch/councillors/' + id + '?format=json&?lang=de';
  //     http.get(url).subscribe(data => {
  //       console.log(data);
  //     })

  // constructor(jsonp: Jsonp) {
  //   var id = 4154;
  //   var url = 'http://ws-old.parlament.ch/councillors/' + id + '?format=json&?lang=de?';
  //   jsonp.request(url, { method: 'Get' }).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
//}
