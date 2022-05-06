import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcome6Page } from './welcome6.page';

describe('Welcome6Page', () => {
  let component: Welcome6Page;
  let fixture: ComponentFixture<Welcome6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Welcome6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
