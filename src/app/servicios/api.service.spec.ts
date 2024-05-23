import { TestBed } from '@angular/core/testing';

import { ConnexionApiService } from './api.service';

describe('ConexionApiService', () => {
  let service: ConnexionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
