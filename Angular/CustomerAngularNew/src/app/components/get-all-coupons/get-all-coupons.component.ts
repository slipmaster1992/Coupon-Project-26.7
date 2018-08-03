import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import {RestService} from '../../services/rest.service';

import swal from 'sweetalert2';



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

  public id:number;
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


