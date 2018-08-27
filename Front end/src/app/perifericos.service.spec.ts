import { TestBed, inject } from '@angular/core/testing';

import { PerifericosService } from './perifericos.service';

describe('PerifericosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerifericosService]
    });
  });

  it('should be created', inject([PerifericosService], (service: PerifericosService) => {
    expect(service).toBeTruthy();
  }));
});
