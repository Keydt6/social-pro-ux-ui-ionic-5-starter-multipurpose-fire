import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome3Page } from './welcome3.page';

describe('Welcome3Page', () => {
  let component: Welcome3Page;
  let fixture: ComponentFixture<Welcome3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
