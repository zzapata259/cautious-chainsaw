import { TestBed } from '@angular/core/testing';

import { Databasecompra } from './databasecompra';

describe('Databasecompra', () => {
  let service: Databasecompra;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Databasecompra);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
