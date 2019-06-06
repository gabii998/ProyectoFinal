import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarHistorialVentasComponent } from './administrar-historial-ventas.component';

describe('AdministrarHistorialVentasComponent', () => {
  let component: AdministrarHistorialVentasComponent;
  let fixture: ComponentFixture<AdministrarHistorialVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarHistorialVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarHistorialVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
