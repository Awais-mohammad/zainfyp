import { TestBed } from '@angular/core/testing';

import { DatabasehandlerService } from './databasehandler.service';

describe('DatabasehandlerService', () => {
  let service: DatabasehandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasehandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
