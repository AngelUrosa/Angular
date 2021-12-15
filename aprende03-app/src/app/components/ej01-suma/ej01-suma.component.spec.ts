import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej01SumaComponent } from './ej01-suma.component';

describe('Ej01SumaComponent', () => {
  let component: Ej01SumaComponent;
  let fixture: ComponentFixture<Ej01SumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej01SumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej01SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
