import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOBDatepickerComponent } from './dobdatepicker.component';

describe('DOBDatepickerComponent', () => {
  let component: DOBDatepickerComponent;
  let fixture: ComponentFixture<DOBDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOBDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOBDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
