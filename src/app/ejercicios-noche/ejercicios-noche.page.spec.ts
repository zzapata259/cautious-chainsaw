import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosNochePage } from './ejercicios-noche.page';

describe('EjerciciosNochePage', () => {
  let component: EjerciciosNochePage;
  let fixture: ComponentFixture<EjerciciosNochePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosNochePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
