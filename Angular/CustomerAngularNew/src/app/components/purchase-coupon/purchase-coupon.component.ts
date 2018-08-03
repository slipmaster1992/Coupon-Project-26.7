import { Component, OnInit } from '@angular/core';
import {Coupon} from '../../common/Coupon';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})


export class PurchaseCouponComponent implements OnInit {



  constructor(private _restService:RestService,private router:Router) { }

  ngOnInit() {
  
  // this.purchaseCoupon();
  
  }

  // purchaseCoupon(){
  


  //   swal({
  //     title: 'Are you sure?',
  //     text: "Purchase This Coupon",
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes'
  //   }).then((result) => {
  //     if (result.value) {

  //   const self = this;
  //   this._restService.purchaseCoupon(this._restService.id).subscribe(

  //     function(response)
  //     {console.log(response);
  //    }

  //   );
  //   swal(
  //     'Purchased !',
  //     'This Coupon Has Been successfully Purchased.',
  //     'success'
  //   )
  // }
  // })
  //   setTimeout(()=>{this.router.navigateByUrl('getallcoupons')},500);     

  //  }
 



}
