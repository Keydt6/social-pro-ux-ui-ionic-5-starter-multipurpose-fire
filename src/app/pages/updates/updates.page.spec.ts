import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPage } from './updates.page';

describe('UpdatesPage', () => {
  let component: UpdatesPage;
  let fixture: ComponentFixture<UpdatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
