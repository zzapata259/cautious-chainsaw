import { TestBed } from '@angular/core/testing';

import { DatabaseUsuario } from './databaseusuario';

describe('Databaseusuario', () => {
  let service: DatabaseUsuario;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseUsuario);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
