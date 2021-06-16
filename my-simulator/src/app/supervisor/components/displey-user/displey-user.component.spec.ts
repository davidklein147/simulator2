import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispleyUserComponent } from './displey-user.component';

describe('DispleyUserComponent', () => {
  let component: DispleyUserComponent;
  let fixture: ComponentFixture<DispleyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispleyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispleyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
