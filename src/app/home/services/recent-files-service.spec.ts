import { TestBed } from '@angular/core/testing';

import { RecentFilesService } from './recent-files-service';

describe('RecentFilesService', () => {
  let service: RecentFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
