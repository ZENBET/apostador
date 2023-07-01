import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaApostadorComponent } from './lista-apostador.component';

describe('ListaApostadorComponent', () => {
  let component: ListaApostadorComponent;
  let fixture: ComponentFixture<ListaApostadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaApostadorComponent]
    });
    fixture = TestBed.createComponent(ListaApostadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
