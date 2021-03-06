import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-coupons-by-type',
  templateUrl: './get-all-coupons-by-type.component.html',
  styleUrls: ['./get-all-coupons-by-type.component.css']
})


export class GetAllCouponsByTypeComponent implements OnInit {


  constructor(private _restService:RestService,private router:Router) { }


  ngOnInit() {
  }


  public coupontype:String;
  public coupons:Coupon[];


  getAllCouponsByType(){



   this.coupons = new Array;
   const self = this;
   this._restService.getAllCouponsByType(this.coupontype).subscribe(

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

);}



purchaseCoupon(id:number){
  
  this._restService.id = id;

swal({
  title: 'Are you sure?',
  text: "Purchase This Coupon",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.value) {





const self = this;
this._restService.purchaseCoupon(this._restService.id).subscribe(

  function(response)
  {console.log(response);
 }

);
swal(
  'Purchased !',
  'This Coupon Has Been successfully Purchased.',
  'success'
)
}
})


}


}
