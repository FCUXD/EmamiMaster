import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourQueryTabsComponent } from './your-query-tabs.component';

describe('YourQueryTabsComponent', () => {
  let component: YourQueryTabsComponent;
  let fixture: ComponentFixture<YourQueryTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourQueryTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourQueryTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
