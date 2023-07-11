import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentWeather } from 'src/app/store/weather/weather.models';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
})
export class SearchDropdownComponent {
  @Input() weather: CurrentWeather;
  @Output() changeCurrentWeather = new EventEmitter();
  constructor() {}
}
