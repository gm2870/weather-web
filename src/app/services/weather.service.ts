import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentWeather } from '../store/weather/weather.models';

const OPENWEATHER_API_KEY = '9353f0cc5063e9dae19c477b63e3ece9';
const API_END_POINT = 'http://api.openweathermap.org/data/2.5/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  model = 'weather';

  constructor(private http: HttpClient) {}

  private getBaseUrl() {
    return `${API_END_POINT}${this.model}?appid=${OPENWEATHER_API_KEY}`;
  }

  searchWeather(searchValue: string, units: string) {
    const url = `${this.getBaseUrl()}&q=${searchValue}&units=${units}`;
    return this.http.get<CurrentWeather>(url);
  }
}
