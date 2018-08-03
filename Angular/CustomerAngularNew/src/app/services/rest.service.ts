import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Coupon} from '../common/Coupon';
import 'rxjs/add/operator/map';




@Injectable()
export class RestService {

// public coupon:Coupon;
public id:number

  constructor(private _http:Http) { }



//Purchase Coupon
public purchaseCoupon(id:number) {

  const promise = this._http.put("http://localhost:8080/customerws/purchasecoupon/" + id,{ } );
  return promise;
}





  //Getting All Exist Coupons
 public getAllCoupons() {
  
  const promise = this._http.get("http://localhost:8080/customerws/getallcoupons")
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}





// Getting all Coupons Between Dates//
 public getAllCouponsByDate(startdate: Date , enddate:Date) {

  
  
  const promise = this._http.get("http://localhost:8080/customerws/getcouponsbydate/" + startdate + "," + enddate)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}




 //Getting All Coupons By Min Price And Max Price
 public getAllCouponsByPrice(startprice: Number , maxprice:Number) {

  
  
  const promise = this._http.get("http://localhost:8080/customerws/getcouponsbyprice/" + startprice + "," + maxprice)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}



//Getting All Coupons By Coupon Type
public getAllCouponsByType(coupontype:String) {

  
  
  const promise = this._http.get("http://localhost:8080/customerws/getcouponsbytype/" + coupontype)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}


//Getting All Customer Coupons//
public getCustomerCoupons() {

  const promise = this._http.get("http://localhost:8080/customerws/getcustomercoupons")
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}





//Getting Customer Coupons By Coupon Type
public getCustomerCouponsByType(coupontype:String) {

  
  
const promise = this._http.get("http://localhost:8080/customerws/getcustomercouponsbytype/" + coupontype)
.map(
  (couponResponse) => {
    return couponResponse.json();
  }
);
return promise;
}




// Getting Customer Coupons Between Dates//
public getCustomerCouponsByDate(startdate: Date , enddate:Date) {

  
  
  const promise = this._http.get("http://localhost:8080/customerws/getcustomercouponsbydate/" + startdate + "," + enddate)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}




//Getting Customer Coupons By Min Price And Max Price
public getCustomerCouponsByPrice(startprice: Number , maxprice:Number) {

  
  
  const promise = this._http.get("http://localhost:8080/customerws/getcustomercouponsbyprice/" + startprice + "," + maxprice)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}










}
