import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailsUserComponent } from './dialog-details-user.component';

describe('DialogDetailsUserComponent', () => {
  let component: DialogDetailsUserComponent;
  let fixture: ComponentFixture<DialogDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
