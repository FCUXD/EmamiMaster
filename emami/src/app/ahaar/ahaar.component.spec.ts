import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaarComponent } from './ahaar.component';

describe('AhaarComponent', () => {
  let component: AhaarComponent;
  let fixture: ComponentFixture<AhaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
