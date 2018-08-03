import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';
import {  Router } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})


export class UpdateCouponComponent implements OnInit {



 
  public price: number;
  public enddate:Date;



  constructor(private _restService:RestService,private router:Router) { }

  ngOnInit() {
    this.updateCoupon();

  }

updateCoupon(){
  
  
  
  
  
    
      swal({
      title: 'New Price',
      input: 'number',
      inputPlaceholder: 'Enter New  Coupon Price',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    }).then((price) => {
  
       this.price = price.value;
   
       this._restService.coupon._price = this.price;
     
       const self = this;
    
       this._restService.updateCoupon(this._restService.coupon).subscribe(
       (response) => {

        swal('Coupon Was Updated !' );
    },
    () => {
        swal('Coupon: ' , ' was not updated, might be a connection problem' , 'error');
    }
  );
 })
    
}

    

  
}
  
  
  
  
  
     







  






   
 



