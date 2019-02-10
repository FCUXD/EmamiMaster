import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhinitsComponent } from './rhinits.component';

describe('RhinitsComponent', () => {
  let component: RhinitsComponent;
  let fixture: ComponentFixture<RhinitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhinitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhinitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
