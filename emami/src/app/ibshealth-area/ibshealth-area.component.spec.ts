import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBSHealthAreaComponent } from './ibshealth-area.component';

describe('IBSHealthAreaComponent', () => {
  let component: IBSHealthAreaComponent;
  let fixture: ComponentFixture<IBSHealthAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBSHealthAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBSHealthAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
