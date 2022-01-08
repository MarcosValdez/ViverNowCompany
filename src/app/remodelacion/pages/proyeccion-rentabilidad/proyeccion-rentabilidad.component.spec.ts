import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionRentabilidadComponent } from './proyeccion-rentabilidad.component';

describe('ProyeccionRentabilidadComponent', () => {
  let component: ProyeccionRentabilidadComponent;
  let fixture: ComponentFixture<ProyeccionRentabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyeccionRentabilidadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionRentabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
