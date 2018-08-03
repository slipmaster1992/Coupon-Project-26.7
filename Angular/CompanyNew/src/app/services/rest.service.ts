import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Coupon} from '../common/Coupon';
import 'rxjs/add/operator/map';



@Injectable()
export class RestService {

  
  public coupon:Coupon;
  
  constructor(private _http:Http) { }

  
  
  
  //Creating New Coupon
  public createCoupon(coupon: Coupon) {

    const promise = this._http.post("http://localhost:8080/companyws/createcoupon", coupon);
    return promise;
  }




//Removing Coupon
  public removeCoupon(coupon: Coupon) {

    const promise = this._http.patch("http://localhost:8080/companyws/deletecoupon", coupon);
    return promise;
  }

  



//Updating Coupon
public updateCoupon(coupon: Coupon) {

  const promise = this._http.put("http://localhost:8080/companyws/updatecoupon", coupon);
  return promise;
}





  //Getting All Exist Coupons
  public getAllCoupons() {
  
    const promise = this._http.get("http://localhost:8080/companyws/getallcoupons")
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }
  
  
  
  
  
  // Getting all Coupons Between Dates//
   public getAllCouponsByDate(startdate: Date , enddate:Date) {

    
    
    const promise = this._http.get("http://localhost:8080/companyws/getcouponsbydate/" + startdate + "," + enddate)
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }
  
 


   //Getting All Coupons By Min Price And Max Price
   public getAllCouponsByPrice(startprice: Number , maxprice:Number) {

    
    
    const promise = this._http.get("http://localhost:8080/companyws/getcouponsbyprice/" + startprice + "," + maxprice)
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }

 

  //Getting All Coupons By Coupon Type
  public getAllCouponsByType(coupontype:String) {

    
    
    const promise = this._http.get("http://localhost:8080/companyws/getcouponstype/" + coupontype)
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }
 
 
  //Getting All Company Coupons//
  public getCompanyCoupons() {
  
    const promise = this._http.get("http://localhost:8080/companyws/getallcompanycoupons")
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }





 //Getting Company Coupons By Coupon Type
  public getCompanyCouponsByType(coupontype:String) {

    
    
  const promise = this._http.get("http://localhost:8080/companyws/getcompanycouponstype/" + coupontype)
  .map(
    (couponResponse) => {
      return couponResponse.json();
    }
  );
  return promise;
}



  
// Getting Company Coupons Between Dates//
  public getCompanyCouponsByDate(startdate: Date , enddate:Date) {

    
    
    const promise = this._http.get("http://localhost:8080/companyws/getcompanycouponsdate/" + startdate + "," + enddate)
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }



  
  //Getting Company Coupons By Min Price And Max Price
  public getCompanyCouponsByPrice(startprice: Number , maxprice:Number) {

    
    
    const promise = this._http.get("http://localhost:8080/companyws/getcompanycouponsprice/" + startprice + "," + maxprice)
    .map(
      (couponResponse) => {
        return couponResponse.json();
      }
    );
    return promise;
  }













}
