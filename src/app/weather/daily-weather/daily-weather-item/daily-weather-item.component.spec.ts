import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyWeatherItemComponent } from './daily-weather-item.component';

describe('DailyWeatherItemComponent', () => {
  let component: DailyWeatherItemComponent;
  let fixture: ComponentFixture<DailyWeatherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyWeatherItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DailyWeatherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
