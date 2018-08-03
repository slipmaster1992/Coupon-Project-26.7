import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RestService} from '../app/Services/rest.service';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import { AppComponent } from './app.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { RemoveCouponComponent } from './Components/remove-coupon/remove-coupon.component';
import { UpdateCouponComponent } from './Components/update-coupon/update-coupon.component';
import { GetAllCouponsComponent } from './Components/get-all-coupons/get-all-coupons.component';
import { GetAllCouponsByTypeComponent } from './Components/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetAllCouponsByDateComponent } from './Components/get-all-coupons-by-date/get-all-coupons-by-date.component';
import { GetAllCouponsByPriceComponent } from './Components/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetCompanyCouponsByTypeComponent } from './Components/get-company-coupons-by-type/get-company-coupons-by-type.component';
import { GetCompanyCouponsByPriceComponent } from './Components/get-company-coupons-by-price/get-company-coupons-by-price.component';
import { GetCompanyCouponsComponent } from './Components/get-company-coupons/get-company-coupons.component';
import { GetCompanyCouponsByDateComponent } from './Components/get-company-coupons-by-date/get-company-coupons-by-date.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCouponComponent,
    RemoveCouponComponent,
    UpdateCouponComponent,
    GetAllCouponsComponent,
    GetAllCouponsByTypeComponent,
    GetAllCouponsByDateComponent,
    GetAllCouponsByPriceComponent,
    GetCompanyCouponsByTypeComponent,
    GetCompanyCouponsByPriceComponent,
    GetCompanyCouponsComponent,
    GetCompanyCouponsByDateComponent
  ],
  imports: [
    SweetAlert2Module.forRoot({
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
        path:'createcoupon',
        component: CreateCouponComponent
      },
       {
        path:'getallcoupons',
        component: GetAllCouponsComponent
      },
      {
        path:'getbytype',
        component: GetAllCouponsByTypeComponent
      },
      {
        path:'getbydate',
        component: GetAllCouponsByDateComponent
      },
      {
        path:'getbyprice',
        component: GetAllCouponsByPriceComponent
      },
      {
        path:'getcompanycoupons',
        component: GetCompanyCouponsComponent
      },
      {
        path:'getcompanycouponsbytype',
        component: GetCompanyCouponsByTypeComponent
      },
      {
        path:'getcompanycouponsbydate',
        component: GetCompanyCouponsByDateComponent
      },
      {
        path:'getcompanycouponsbyprice',
        component: GetCompanyCouponsByPriceComponent
      },
      {
        path:'removecoupon',
        component: RemoveCouponComponent
      },
      {
        path:'updatecoupon',
        component: UpdateCouponComponent
      }
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
