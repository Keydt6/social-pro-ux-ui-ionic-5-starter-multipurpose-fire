import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome4Page } from './welcome4.page';

describe('Welcome4Page', () => {
  let component: Welcome4Page;
  let fixture: ComponentFixture<Welcome4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
