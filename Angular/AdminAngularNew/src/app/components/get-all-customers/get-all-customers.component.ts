import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {Customer} from '../../common/Customer';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})


export class GetAllCustomersComponent implements OnInit {

  public customers:Customer[];
  public password:string;
  public customer:Customer;

constructor(private _restService:RestService,private router:Router) { }

  
  
  ngOnInit() {
  
  this.getAllCustomers();

  }


  


  getAllCustomers(){



    this.customers = new Array;
    const self = this;
    this._restService.getAllCustomers().subscribe(
 
     (_customers) => {
    
      if(self.customers.length === 0){
 
 
       for(let c of _customers)
       {
         
       
         c = new Customer('', '',  c);
       
        
         self.customers.push(c);
       }
      }
    }
 
 );
  }


  updateCustomer(customer:Customer){

    this._restService.customer = customer;

    swal({
      title: 'New Password',
      input: 'password',
      inputPlaceholder: 'Enter New  Customer Password',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    }).then((password) => {
  
       this.password = password.value;
   
  
  
     this._restService.customer.password = this.password;
     const self = this;
    
     this._restService.updateCustomer(this._restService.customer).subscribe(
       (response) => {
  
        swal('Customer Updated Successfully' );
    },
    () => {
        swal('Customer was not updated, might be a connection problem' , 'error');
    }
  );
  
     })
    
     setTimeout(()=>{this.router.navigateByUrl('getallcustomers')},200); 
  
  }

  removeCustomer(customer:Customer){
  

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
    this._restService.removeCustomer(this._restService.customer).subscribe(
      
      function(response)
      {console.log(response);
     });
   
     swal(
      'Removed!',
      'This Customer has been removed successfully.',
      'success'
    )
  }
  })
    
    setTimeout(()=>{this.router.navigateByUrl('getallcustomers')},500);     

   }
 

}
