import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feeds2Page } from './feeds2.page';

describe('Feeds2Page', () => {
  let component: Feeds2Page;
  let fixture: ComponentFixture<Feeds2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feeds2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feeds2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
