import { Component, OnInit } from '@angular/core';
import { ThreadService } from './../thread/thread.service'
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  weather = {};
  constructor(private _threadService: ThreadService) {
  	this.todayWeather();
  }	

  todayWeather(){
  	this._threadService.getWeather((tasks) => {
    	this.weather = tasks;
    },"https://api.openweathermap.org/data/2.5/weather?zip=98004,us&APPID=d5ab84f3bbff04a8a02a7d894914bc55");
  }


  ngOnInit() {
  }

}
