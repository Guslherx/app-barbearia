import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarHorariosPage } from './gerenciar-horarios.page';

describe('GerenciarHorariosPage', () => {
  let component: GerenciarHorariosPage;
  let fixture: ComponentFixture<GerenciarHorariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
