import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej03ConcatenaComponent } from './ej03-concatena.component';

describe('Ej03ConcatenaComponent', () => {
  let component: Ej03ConcatenaComponent;
  let fixture: ComponentFixture<Ej03ConcatenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej03ConcatenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej03ConcatenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
