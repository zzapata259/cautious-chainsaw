import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarritaPage } from './barrita.page';

describe('BarritaPage', () => {
  let component: BarritaPage;
  let fixture: ComponentFixture<BarritaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
