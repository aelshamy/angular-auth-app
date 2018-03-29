import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationDataService } from './authorization-data.service';

describe('Authorization.DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationDataService]
    });
  });

  it(
    'should be created',
    inject([AuthorizationDataService], (service: AuthorizationDataService) => {
      expect(service).toBeTruthy();
    })
  );
});
