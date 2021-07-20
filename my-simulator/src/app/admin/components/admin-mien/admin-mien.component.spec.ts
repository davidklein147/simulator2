import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMienComponent } from './admin-mien.component';

describe('AdminMienComponent', () => {
  let component: AdminMienComponent;
  let fixture: ComponentFixture<AdminMienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
