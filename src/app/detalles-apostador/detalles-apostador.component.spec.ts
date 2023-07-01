import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesApostadorComponent } from './detalles-apostador.component';

describe('DetallesApostadorComponent', () => {
  let component: DetallesApostadorComponent;
  let fixture: ComponentFixture<DetallesApostadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesApostadorComponent]
    });
    fixture = TestBed.createComponent(DetallesApostadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
