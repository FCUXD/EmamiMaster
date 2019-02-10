import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhaarsilderComponent } from './ahaarsilder.component';

describe('AhaarsilderComponent', () => {
  let component: AhaarsilderComponent;
  let fixture: ComponentFixture<AhaarsilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhaarsilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhaarsilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
