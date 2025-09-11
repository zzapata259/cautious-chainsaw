import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeDetallesPage } from './personaje-detalles.page';

describe('PersonajeDetallesPage', () => {
  let component: PersonajeDetallesPage;
  let fixture: ComponentFixture<PersonajeDetallesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeDetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
