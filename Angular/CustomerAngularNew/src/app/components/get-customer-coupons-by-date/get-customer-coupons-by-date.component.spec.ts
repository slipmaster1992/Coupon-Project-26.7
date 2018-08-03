import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsByDateComponent } from './get-customer-coupons-by-date.component';

describe('GetCustomerCouponsByDateComponent', () => {
  let component: GetCustomerCouponsByDateComponent;
  let fixture: ComponentFixture<GetCustomerCouponsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
