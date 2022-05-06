import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome5Page } from './welcome5.page';

describe('Welcome5Page', () => {
  let component: Welcome5Page;
  let fixture: ComponentFixture<Welcome5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
