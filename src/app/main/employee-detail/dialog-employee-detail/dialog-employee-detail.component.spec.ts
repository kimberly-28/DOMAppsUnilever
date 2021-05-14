import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmployeeDetailComponent } from './dialog-employee-detail.component';

describe('DialogEmployeeDetailComponent', () => {
  let component: DialogEmployeeDetailComponent;
  let fixture: ComponentFixture<DialogEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEmployeeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
