import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosDiaPage } from './ejercicios-dia.page';

describe('EjerciciosDiaPage', () => {
  let component: EjerciciosDiaPage;
  let fixture: ComponentFixture<EjerciciosDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
