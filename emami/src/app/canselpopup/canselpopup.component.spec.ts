import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanselpopupComponent } from './canselpopup.component';

describe('CanselpopupComponent', () => {
  let component: CanselpopupComponent;
  let fixture: ComponentFixture<CanselpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanselpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanselpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
