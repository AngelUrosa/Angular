import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej02AcercaDeComponent } from './ej02-acerca-de.component';

describe('Ej02AcercaDeComponent', () => {
  let component: Ej02AcercaDeComponent;
  let fixture: ComponentFixture<Ej02AcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej02AcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej02AcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
