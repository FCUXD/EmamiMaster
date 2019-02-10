import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdashcalComponent } from './docdashcal.component';

describe('DocdashcalComponent', () => {
  let component: DocdashcalComponent;
  let fixture: ComponentFixture<DocdashcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocdashcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdashcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
