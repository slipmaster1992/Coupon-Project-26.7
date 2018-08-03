import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import {RestService} from '../../services/rest.service';



@Component({
  selector: 'app-get-customer-coupons-by-type',
  templateUrl: './get-customer-coupons-by-type.component.html',
  styleUrls: ['./get-customer-coupons-by-type.component.css']
})


export class GetCustomerCouponsByTypeComponent implements OnInit {


  constructor(private _restService:RestService) { }


  ngOnInit() {
  }

  public coupontype:String;
  public coupons:Coupon[];


  getCustomerCouponsByType(){



   this.coupons = new Array;
   const self = this;
   this._restService.getCustomerCouponsByType(this.coupontype).subscribe(

    (_coupons) => {
   
     if(self.coupons.length === 0){


      for(let c of _coupons)
      {
        const date: Date = new Date;
      
        c = new Coupon('', date, date, 0, '', '', 0, '', c);
      
        c._startDate = new Date(c._startDate).toDateString();
        c._endDate = new Date(c._endDate).toDateString();
      
        self.coupons.push(c);
      }
     }
    }

);
  

}



}
