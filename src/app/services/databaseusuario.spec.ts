import { TestBed } from '@angular/core/testing';

import { Databseusuario } from './databseusuario';

describe('Databseusuario', () => {
  let service: Databseusuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Databseusuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
