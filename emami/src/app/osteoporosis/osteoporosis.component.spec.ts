import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteoporosisComponent } from './osteoporosis.component';

describe('OsteoporosisComponent', () => {
  let component: OsteoporosisComponent;
  let fixture: ComponentFixture<OsteoporosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsteoporosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsteoporosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
