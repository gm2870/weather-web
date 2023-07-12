import { Injectable } from '@angular/core';
import { CurrentWeather } from '../store/weather/weather.models';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private timeDiff = Date.now() + 600000;
  private _weathers: CurrentWeather[] = [];
  saveWeather(weather: CurrentWeather) {
    this._weathers.push({
      ...weather,
      date: new Date(),
    });
  }

  get weathers() {
    return this._weathers.filter((w) => !this.weatherIsOld(w.date));
  }

  alreadyExists(q: string) {
    return this.weathers.find((w) => w.name.toLowerCase() === q);
  }

  private weatherIsOld(date: Date) {
    const minutes = Math.floor(
      (+this.timeDiff - +new Date(date)) / (60 * 1000)
    );
    if (minutes > 10) {
      return true;
    }
    return false;
  }
}
