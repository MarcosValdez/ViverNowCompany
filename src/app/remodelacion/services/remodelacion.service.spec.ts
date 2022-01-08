import { TestBed } from '@angular/core/testing';

import { RemodelacionService } from './remodelacion.service';

describe('RemodelacionService', () => {
  let service: RemodelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemodelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
