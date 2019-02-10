import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNavbarResponsiveComponent } from './patient-navbar-responsive.component';

describe('PatientNavbarResponsiveComponent', () => {
  let component: PatientNavbarResponsiveComponent;
  let fixture: ComponentFixture<PatientNavbarResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNavbarResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNavbarResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
