import { TestBed, inject } from '@angular/core/testing';

import { JsonGetService } from './json-get.service';

describe('JsonGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonGetService]
    });
  });

  it('should be created', inject([JsonGetService], (service: JsonGetService) => {
    expect(service).toBeTruthy();
  }));
});
