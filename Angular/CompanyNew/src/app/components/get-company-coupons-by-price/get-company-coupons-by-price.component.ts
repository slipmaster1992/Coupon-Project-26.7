import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-get-company-coupons-by-price',
  templateUrl: './get-company-coupons-by-price.component.html',
  styleUrls: ['./get-company-coupons-by-price.component.css']
})


export class GetCompanyCouponsByPriceComponent implements OnInit {

  
  constructor(private _restService:RestService,private router:Router) { }

  
  ngOnInit() {
  }


  public startprice:Number;
  public maxprice:Number;
  public coupons:Coupon[];


  getCompanyCouponsByPrice(){



   this.coupons = new Array;
   const self = this;
   this._restService.getCompanyCouponsByPrice(this.startprice , this.maxprice).subscribe(

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
