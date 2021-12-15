import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej04ConcatenaComponent } from './ej04-concatena.component';

describe('Ej04ConcatenaComponent', () => {
  let component: Ej04ConcatenaComponent;
  let fixture: ComponentFixture<Ej04ConcatenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej04ConcatenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej04ConcatenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
