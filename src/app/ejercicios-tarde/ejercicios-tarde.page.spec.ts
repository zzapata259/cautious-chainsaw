import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosTardePage } from './ejercicios-tarde.page';

describe('EjerciciosTardePage', () => {
  let component: EjerciciosTardePage;
  let fixture: ComponentFixture<EjerciciosTardePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosTardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
