import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentConfirmedComponent } from './appoinment-confirmed.component';

describe('AppoinmentConfirmedComponent', () => {
  let component: AppoinmentConfirmedComponent;
  let fixture: ComponentFixture<AppoinmentConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
