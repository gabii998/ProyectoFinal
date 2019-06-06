import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarComercioComponent } from './administrar-comercio.component';

describe('AdministrarComercioComponent', () => {
  let component: AdministrarComercioComponent;
  let fixture: ComponentFixture<AdministrarComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
