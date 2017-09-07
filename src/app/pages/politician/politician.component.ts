
import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';
import { RequestOptions } from '@angular/http';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map'

@Component({
  selector: 'politician',
  templateUrl: './politician.html'
})

export class Politician {
 //   constructor(http: Http) {
  //     var id = 4154;
  //     var url = 'http://ws-old.parlament.ch/councillors/' + id + '?format=json&?lang=de';
  //     http.get(url).subscribe(data => {
  //       console.log(data);
  //     })

  constructor(jsonp: Jsonp) {
    var id = 4154;
    var url = 'http://ws-old.parlament.ch/councillors/' + id + '?format=json&?lang=de?';
    jsonp.request(url, { method: 'Get' }).subscribe((res) => {
      console.log(res);
    });
  }
}