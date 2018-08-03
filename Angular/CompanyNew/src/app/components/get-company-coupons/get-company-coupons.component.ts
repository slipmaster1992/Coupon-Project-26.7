import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-get-company-coupons',
  templateUrl: './get-company-coupons.component.html',
  styleUrls: ['./get-company-coupons.component.css']
})



   export class GetCompanyCouponsComponent implements OnInit {

  
  
  
    constructor(private _restService:RestService,private router:Router) {  
    
          
  }

 
  ngOnInit() {
    this.getCompanyCoupons();
  }

 // public coupon: Coupon;
  public coupons:Coupon[];


   getCompanyCoupons(){


 
    this.coupons = new Array;
    const self = this;
    this._restService.getCompanyCoupons().subscribe(
 
     (_coupons) => {
    
      if(self.coupons.length === 0){
 
 
       for(let c of _coupons)
       {
         const date: Date = new Date;
       
         c = new Coupon('', date, date, 0, '', '', 0, '', c);
       
         //c._startDate = new Date(c._startDate).toDateString();
       //  c._endDate = new Date(c._endDate).toDateString();
       
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
