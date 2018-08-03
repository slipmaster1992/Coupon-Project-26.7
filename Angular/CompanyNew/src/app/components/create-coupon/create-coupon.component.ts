import { Component, OnInit } from '@angular/core';
import{Coupon} from '../../common/Coupon';
import {RestService} from '../../Services/rest.service';

import swal from 'sweetalert2';


@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})


export class CreateCouponComponent implements OnInit {

  public title: string;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
  public type: string;
  public amount: number;
  public message: string;
  public price: number;
  public image: string;

  public coupon: Coupon;



  public resturants : string = "http://asset.rakhduu.com/images/article/472-1470654543_57a8684f9d950.jpg"
  public electricity : string = "https://cdn0.iconfinder.com/data/icons/professionals-line/2048/1584_-_Electrician-512.png";
  public food : string = "https://previews.123rf.com/images/maxsim/maxsim1312/maxsim131200071/24681063-bouton-internet-cuisine-icon-red-white-background.jpg";
  public health : string = "https://previews.123rf.com/images/gavrissergey/gavrissergey1708/gavrissergey170800018/84192465-healthy-organic-eco-vegetarian-food-logo-design-vector-template-ecology-health-eco-organic-logo-fres.jpg";
  public sports : string = "https://fanvictor.com/wp-content/uploads/2015/06/icon_256.png";
  public camping : string = "https://st2.depositphotos.com/3577609/11836/v/950/depositphotos_118360822-stock-illustration-camping-logo-design.jpg";
  public travelling : string = "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4084457/580/387/m1/fpnw/wm0/traveling1-.jpg?1520379537&s=117092317f2fc332a90b9d41ec0f7319";

  constructor(private _restService:RestService) { }


  ngOnInit() {
  }



  createCoupon(coupon:Coupon) {

    this.coupon = new Coupon(this.title, this.startDate, this.endDate, this.amount,
                             this.type , this.message, this.price, this.image);
 
   
     if (this.amount <= 0) {
       swal('Amount', 'can not be 0 or less, try again', 'warning' );
       this.amount = null;
       return;
     }
 
     if (this.price <= 0) {
       swal('Price', 'can not be 0 or less, try again' , 'warning');
       this.price = null;
       return;
     }
 
     const self = this;
     this._restService.createCoupon(this.coupon).subscribe(
      (response) => {
          swal(self.coupon._title , ' was created.' , 'success');
      },
      () => {
          swal(self.coupon._title , ' was not created, coupon maybe already exist.' , 'error');
      }
    );
   this.clearMembers();
   }
 
 
   // Clear All Members
   clearMembers() {
     this.title = null;
     this.startDate = null;
     this.endDate = null;
     this.amount = null;
     this.type = null;
     this.message = null;
     this.price = null;
     this.image = null;
   }
}
