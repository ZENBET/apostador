import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarApostadorComponent } from './actualizar-apostador.component';

describe('ActualizarApostadorComponent', () => {
  let component: ActualizarApostadorComponent;
  let fixture: ComponentFixture<ActualizarApostadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarApostadorComponent]
    });
    fixture = TestBed.createComponent(ActualizarApostadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
