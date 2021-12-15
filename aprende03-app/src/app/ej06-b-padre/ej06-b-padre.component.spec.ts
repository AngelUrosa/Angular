import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej06BPadreComponent } from './ej06-b-padre.component';

describe('Ej06BPadreComponent', () => {
  let component: Ej06BPadreComponent;
  let fixture: ComponentFixture<Ej06BPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej06BPadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej06BPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
