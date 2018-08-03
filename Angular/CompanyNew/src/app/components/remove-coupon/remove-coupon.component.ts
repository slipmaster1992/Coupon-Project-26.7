import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {  Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-remove-coupon',
  templateUrl: './remove-coupon.component.html',
  styleUrls: ['./remove-coupon.component.css']
})


export class RemoveCouponComponent implements OnInit {


  public coupon:Coupon;

  constructor(private _restService:RestService,private router:Router) { }


  ngOnInit() {
 
 
    this.removeCoupon();
  

}

   



  removeCoupon(){
  
   
  swal({
    title: 'Are you sure?',
    text: "These changes will be saved permanently",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.value) {
      


   
   
   
    const self = this;
    this._restService.removeCoupon(this._restService.coupon).subscribe(

      function(response)
      {console.log(response);
     });
   

    swal(
      'Removed!',
      'This company has been removed successfully.',
      'success'
   )
  }
  })

    setTimeout(()=>{this.router.navigateByUrl('getcompanycoupons')},50);     

   }
 



  

}
