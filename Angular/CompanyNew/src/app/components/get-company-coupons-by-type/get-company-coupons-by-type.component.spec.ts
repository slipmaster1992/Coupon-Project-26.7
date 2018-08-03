import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsByTypeComponent } from './get-company-coupons-by-type.component';

describe('GetCompanyCouponsByTypeComponent', () => {
  let component: GetCompanyCouponsByTypeComponent;
  let fixture: ComponentFixture<GetCompanyCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
