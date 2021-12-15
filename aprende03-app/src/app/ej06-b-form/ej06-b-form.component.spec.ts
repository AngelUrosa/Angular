import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej06BFormComponent } from './ej06-b-form.component';

describe('Ej06BFormComponent', () => {
  let component: Ej06BFormComponent;
  let fixture: ComponentFixture<Ej06BFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej06BFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej06BFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
