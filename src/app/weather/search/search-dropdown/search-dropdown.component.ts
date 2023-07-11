import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { onStartLoading } from 'src/app/store/ui/ui.actions';
import { CurrentWeather } from 'src/app/store/weather/weather.models';
import { getUnitStrings } from '../../utils/utils';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss'],
})
export class SearchDropdownComponent {
  @Input() weather: CurrentWeather;
  @Input() units: string;
  @Output() changeCurrentWeather = new EventEmitter();
  constructor(private store: Store) {
    this.store.dispatch(onStartLoading({ loading: false }));
  }
  get unitStrings() {
    return getUnitStrings(this.units);
  }
}
