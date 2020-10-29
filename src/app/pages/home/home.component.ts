import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private weaterService: WeatherService
  ) { }

  ngOnInit(): void {
    this.weaterService.get().subscribe(
      (response) => {
        console.log('response', response);
      }
    )
  }

}
