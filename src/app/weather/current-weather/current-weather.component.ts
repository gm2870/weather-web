import { Component } from '@angular/core';
import { WeatherService } from '@nx-angular-nest/core-data';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  constructor(private weatherService: WeatherService) {}
}
