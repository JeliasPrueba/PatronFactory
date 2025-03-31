import { TestBed } from '@angular/core/testing';

import { FilesReportsService } from './files-reports.service';

describe('FilesReportsService', () => {
  let service: FilesReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
