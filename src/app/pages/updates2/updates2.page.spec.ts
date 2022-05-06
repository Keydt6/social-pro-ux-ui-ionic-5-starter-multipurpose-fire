import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Updates2Page } from './updates2.page';

describe('Updates2Page', () => {
  let component: Updates2Page;
  let fixture: ComponentFixture<Updates2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Updates2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Updates2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
