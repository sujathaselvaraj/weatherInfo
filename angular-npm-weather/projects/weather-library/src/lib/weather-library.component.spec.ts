import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLibraryComponent } from './weather-library.component';

describe('WeatherLibraryComponent', () => {
  let component: WeatherLibraryComponent;
  let fixture: ComponentFixture<WeatherLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
