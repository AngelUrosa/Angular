import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej05ArrayComponent } from './ej05-array.component';

describe('Ej05ArrayComponent', () => {
  let component: Ej05ArrayComponent;
  let fixture: ComponentFixture<Ej05ArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej05ArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej05ArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
