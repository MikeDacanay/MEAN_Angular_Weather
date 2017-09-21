import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ThreadService {
  task=['service from thread'];
  constructor(private _http: Http) { }

  getWeather(callback, x){
    this._http.get(x).subscribe(
      (response) => {
        this.task = response.json();
        callback(this.task);
      },
      (err) => {
        console.log(err);
    });  	
  }

}
