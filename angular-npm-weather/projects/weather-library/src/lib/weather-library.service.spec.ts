import { TestBed } from '@angular/core/testing';

import { WeatherLibraryService } from './weather-library.service';

describe('WeatherLibraryService', () => {
  let service: WeatherLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
