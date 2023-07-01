import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarApostadorComponent } from './registrar-apostador.component';

describe('RegistrarApostadorComponent', () => {
  let component: RegistrarApostadorComponent;
  let fixture: ComponentFixture<RegistrarApostadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarApostadorComponent]
    });
    fixture = TestBed.createComponent(RegistrarApostadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
