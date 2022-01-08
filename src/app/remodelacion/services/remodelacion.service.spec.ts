import { TestBed } from '@angular/core/testing';

import { RemodelacionService } from './remodelacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RemodelacionService', () => {
  let service: RemodelacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(RemodelacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
