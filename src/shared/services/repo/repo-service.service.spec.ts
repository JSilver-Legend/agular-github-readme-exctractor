import { TestBed } from '@angular/core/testing';

import { RepoServiceService } from './repo-service.service';

describe('RepoServiceService', () => {
  let service: RepoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
