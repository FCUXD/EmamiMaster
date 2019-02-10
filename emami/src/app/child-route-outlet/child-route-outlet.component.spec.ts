import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteOutletComponent } from './child-route-outlet.component';

describe('ChildRouteOutletComponent', () => {
  let component: ChildRouteOutletComponent;
  let fixture: ComponentFixture<ChildRouteOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
