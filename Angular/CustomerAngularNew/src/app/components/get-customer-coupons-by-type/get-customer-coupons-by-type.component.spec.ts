import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsByTypeComponent } from './get-customer-coupons-by-type.component';

describe('GetCustomerCouponsByTypeComponent', () => {
  let component: GetCustomerCouponsByTypeComponent;
  let fixture: ComponentFixture<GetCustomerCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
