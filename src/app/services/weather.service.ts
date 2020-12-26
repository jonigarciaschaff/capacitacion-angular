import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }
  
  get(){
    return this.http.get(
      'http://api.weatherapi.com/v1/forecast.json',
      {
        params: {
          key: 'API_KEY',
          q: 'Rosario santa fe',
          days: '7'
        },
      }
    );
  }
  
}
