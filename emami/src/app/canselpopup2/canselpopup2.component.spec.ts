import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Canselpopup2Component } from './canselpopup2.component';

describe('Canselpopup2Component', () => {
  let component: Canselpopup2Component;
  let fixture: ComponentFixture<Canselpopup2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Canselpopup2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Canselpopup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
