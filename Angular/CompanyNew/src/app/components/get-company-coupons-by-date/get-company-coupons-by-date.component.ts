import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-company-coupons-by-date',
  templateUrl: './get-company-coupons-by-date.component.html',
  styleUrls: ['./get-company-coupons-by-date.component.css']
})



export class GetCompanyCouponsByDateComponent implements OnInit {


  constructor(private _restService:RestService,private router:Router) { }


  ngOnInit() {
  }

  public startdate:Date;
  public enddate:Date;
  public coupons:Coupon[];


  getCompanyCouponsByDate(){



   this.coupons = new Array;
   const self = this;
   this._restService.getCompanyCouponsByDate(this.startdate , this.enddate).subscribe(

    (_coupons) => {
   
     if(self.coupons.length === 0){


      for(let c of _coupons)
      {
        const date: Date = new Date;
      
        c = new Coupon('', date, date, 0, '', '', 0, '', c);
      
       
      
        self.coupons.push(c);
      }
     }
      
    
    }  ,
    () => {
        swal('There Are No Coupons Between This Dates !');
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
