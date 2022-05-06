import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome2Page } from './welcome2.page';

describe('Welcome2Page', () => {
  let component: Welcome2Page;
  let fixture: ComponentFixture<Welcome2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
