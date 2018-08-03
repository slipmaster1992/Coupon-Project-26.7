import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import {RestService} from '../../services/rest.service';



@Component({
  selector: 'app-get-customer-coupons-by-price',
  templateUrl: './get-customer-coupons-by-price.component.html',
  styleUrls: ['./get-customer-coupons-by-price.component.css']
})


export class GetCustomerCouponsByPriceComponent implements OnInit {


  constructor(private _restService:RestService) { }


  ngOnInit() {
  }


  public startprice:Number;
  public maxprice:Number;
  public coupons:Coupon[];


  getCustomerCouponsByPrice(){



   this.coupons = new Array;
   const self = this;
   this._restService.getCustomerCouponsByPrice(this.startprice , this.maxprice).subscribe(

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
