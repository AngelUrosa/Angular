import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej02ConcatenaComponent } from './ej02-concatena.component';

describe('Ej02ConcatenaComponent', () => {
  let component: Ej02ConcatenaComponent;
  let fixture: ComponentFixture<Ej02ConcatenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej02ConcatenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej02ConcatenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
