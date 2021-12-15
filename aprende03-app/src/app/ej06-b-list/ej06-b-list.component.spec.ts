import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej06BListComponent } from './ej06-b-list.component';

describe('Ej06BListComponent', () => {
  let component: Ej06BListComponent;
  let fixture: ComponentFixture<Ej06BListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej06BListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ej06BListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
