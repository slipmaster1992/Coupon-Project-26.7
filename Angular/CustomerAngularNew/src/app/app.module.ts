import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RestService} from '../app/services/rest.service'

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { PurchaseCouponComponent } from './components/purchase-coupon/purchase-coupon.component';
import { GetAllCouponsComponent } from './Components/get-all-coupons/get-all-coupons.component';
import { GetAllCouponsByDateComponent } from './Components/get-all-coupons-by-date/get-all-coupons-by-date.component';
import { GetAllCouponsByPriceComponent } from './Components/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetAllCouponsByTypeComponent } from './Components/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetCustomerCouponsComponent } from './Components/get-customer-coupons/get-customer-coupons.component';
import { GetCustomerCouponsByTypeComponent } from './Components/get-customer-coupons-by-type/get-customer-coupons-by-type.component';
import { GetCustomerCouponsByDateComponent } from './Components/get-customer-coupons-by-date/get-customer-coupons-by-date.component';
import { GetCustomerCouponsByPriceComponent } from './Components/get-customer-coupons-by-price/get-customer-coupons-by-price.component';

 


@NgModule({
  declarations: [
    AppComponent,
    PurchaseCouponComponent,
    GetAllCouponsComponent,
    GetAllCouponsByDateComponent,
    GetAllCouponsByPriceComponent,
    GetAllCouponsByTypeComponent,
    GetCustomerCouponsComponent,
    GetCustomerCouponsByTypeComponent,
    GetCustomerCouponsByDateComponent,
    GetCustomerCouponsByPriceComponent,
    
   
  ],
  imports: [SweetAlert2Module.forRoot({
    buttonsStyling: false,
    customClass: 'modal-content',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn'
}),
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot([
    {
      path:'purchasecoupon',
      component: PurchaseCouponComponent
    },
    {
      path:'getallcoupons',
      component: GetAllCouponsComponent
    },
    {
      path:'getallcouponsbydate',
      component: GetAllCouponsByDateComponent
    },
    {
      path:'getallcouponsbyprice',
      component: GetAllCouponsByPriceComponent
    },
    {
      path:'getallcouponsbytype',
      component: GetAllCouponsByTypeComponent
    },
    {
      path:'getcustomercoupons',
      component: GetCustomerCouponsComponent
    },
    {
      path:'getcustomercouponsbytype',
      component: GetCustomerCouponsByTypeComponent
    },
    {
      path:'getcustomercouponsbydate',
      component: GetCustomerCouponsByDateComponent
    },
    {
      path:'getcustomercouponsbyprice',
      component: GetCustomerCouponsByPriceComponent
    },
    
  ])],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
