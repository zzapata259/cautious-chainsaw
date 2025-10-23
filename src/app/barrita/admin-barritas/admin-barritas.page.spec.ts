import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBarritasPage } from './admin-barritas.page';

describe('AdminBarritasPage', () => {
  let component: AdminBarritasPage;
  let fixture: ComponentFixture<AdminBarritasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBarritasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
