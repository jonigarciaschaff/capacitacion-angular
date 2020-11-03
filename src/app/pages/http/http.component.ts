import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  days: Array<any> = [];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.weatherService.get().subscribe(
       (response: any) => {
         this.days = response.forecast.forecastday;
       }
    )
  }

}
