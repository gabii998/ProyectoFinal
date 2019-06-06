import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarArticuloComponent } from './administrar-articulo.component';

describe('AdministrarArticuloComponent', () => {
  let component: AdministrarArticuloComponent;
  let fixture: ComponentFixture<AdministrarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
