import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';



@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})


export class GetAllCouponsComponent implements OnInit {


  constructor(private _restService:RestService) { }


  ngOnInit() {
  this.getAllCoupons();
  }


  public coupons:Coupon[];


  getAllCoupons(){



   this.coupons = new Array;
   const self = this;
   this._restService.getAllCoupons().subscribe(

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
