import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsPage } from './sectors.page';

describe('SectorsPage', () => {
  let component: SectorsPage;
  let fixture: ComponentFixture<SectorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
