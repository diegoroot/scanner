import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCouponPage } from './qr-coupon.page';

describe('QrCouponPage', () => {
  let component: QrCouponPage;
  let fixture: ComponentFixture<QrCouponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCouponPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
