import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updates3Page } from './updates3.page';

describe('Updates3Page', () => {
  let component: Updates3Page;
  let fixture: ComponentFixture<Updates3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updates3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updates3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
