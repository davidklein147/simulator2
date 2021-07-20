import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsMangementComponent } from './academics-mangement.component';

describe('AcademicsMangementComponent', () => {
  let component: AcademicsMangementComponent;
  let fixture: ComponentFixture<AcademicsMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicsMangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
