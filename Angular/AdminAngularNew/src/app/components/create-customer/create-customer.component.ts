import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {Customer} from '../../common/Customer';
import swal from 'sweetalert2';




@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})


export class CreateCustomerComponent implements OnInit {

public custName:string;
public password:string;
public customer:Customer;



  constructor(private _restService:RestService) { }

  ngOnInit() {
 
 
  }




  createCustomer(customer:Customer) {

    this.customer = new Customer(this.custName, this.password);
 
   
     const self = this;
     this._restService.createCustomer(this.customer).subscribe(
      (response) => {
          swal(self.customer._custName, ' was created.' , 'success');
      },
      () => {
          swal(self.customer._custName , ' was not created, customer maybe already exist.' , 'error');
      }
    );
   this.clearMembers();
   }
 
 
   // Clear All Members
   clearMembers() {
     this.custName = null;
     this.password = null;
     
    }




}
