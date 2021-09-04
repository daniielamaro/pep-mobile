import { TestBed } from '@angular/core/testing';

import { FotoperfilService } from './fotoperfil.service';

describe('FotoperfilService', () => {
  let service: FotoperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
