import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsByDateComponent } from './get-company-coupons-by-date.component';

describe('GetCompanyCouponsByDateComponent', () => {
  let component: GetCompanyCouponsByDateComponent;
  let fixture: ComponentFixture<GetCompanyCouponsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
