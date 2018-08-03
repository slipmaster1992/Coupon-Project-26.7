import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-get-company-coupons-by-type',
  templateUrl: './get-company-coupons-by-type.component.html',
  styleUrls: ['./get-company-coupons-by-type.component.css']
})



export class GetCompanyCouponsByTypeComponent implements OnInit {

  
  constructor(private _restService:RestService,private router:Router) { }

  
  ngOnInit() {
  }



  public coupontype:String;
  public coupons:Coupon[];


  getCompanyCouponsByType(){



   this.coupons = new Array;
   const self = this;
   this._restService.getCompanyCouponsByType(this.coupontype).subscribe(

    (_coupons) => {
   
     if(self.coupons.length === 0){


      for(let c of _coupons)
      {
        const date: Date = new Date;
      
        c = new Coupon('', date, date, 0, '', '', 0, '', c);
      
       
        self.coupons.push(c);
      }
     }
    }

);
}


removeCoupon(coupon:Coupon){
   
  this._restService.coupon = coupon;
 this.router.navigateByUrl('removecoupon');


}

updateCoupon(coupon:Coupon){
  
 this._restService.coupon = coupon;
 this.router.navigateByUrl('updatecoupon');


}














}
