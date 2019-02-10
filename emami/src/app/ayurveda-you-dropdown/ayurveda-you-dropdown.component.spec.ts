import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedaYouDropdownComponent } from './ayurveda-you-dropdown.component';

describe('AyurvedaYouDropdownComponent', () => {
  let component: AyurvedaYouDropdownComponent;
  let fixture: ComponentFixture<AyurvedaYouDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyurvedaYouDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyurvedaYouDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
