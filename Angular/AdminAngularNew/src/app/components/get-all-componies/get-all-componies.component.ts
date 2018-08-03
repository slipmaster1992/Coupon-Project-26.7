import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {Company} from '../../common/Company';
import {Router} from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-get-all-componies',
  templateUrl: './get-all-componies.component.html',
  styleUrls: ['./get-all-componies.component.css']
})


export class GetAllComponiesComponent implements OnInit {
 
  constructor(private _restService:RestService,private router:Router) { }

  ngOnInit() {
  this.getAllComponies();
  }

  public componies:Company[];
  public email:string;
  public password:string;
  public company:Company
   
  getAllComponies(){



   this.componies = new Array;
   const self = this;
   this._restService.getAllComponies().subscribe(

    (_componies) => {
   
     if(self.componies.length === 0){


      for(let c of _componies)
      {
        
      
        c = new Company('', '', '', c);
      
       
        self.componies.push(c);
      }
     }
    }

);
}


updateCompany(company:Company){
 
 this._restService.company = company;



  
    swal({
    title: 'New Password',
    input: 'password',
    inputPlaceholder: 'Enter New  Comapny Password',
    showCancelButton: true,
    inputValidator: (value) => {
      return !value && 'You need to write something!'
    }
  }).then((password) => {

     this.password = password.value;
 

     swal({
      title: 'New Email',
      input: 'text',
      inputPlaceholder: 'Enter New  Company Email',
      showCancelButton: true,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    }).then((email) => {
    
       this.email = email.value;
   
       
       
     this._restService.company.password = this.password;
    this._restService.company.email = this.email; 
     
   const self = this;
  this._restService.updateCompany(this._restService.company).subscribe(
     (response) => {

      swal('Company Updated Successfully' );
  },
  () => {
      swal('Company was not updated, might be a connection problem' , 'error');
  }
);

   })
  })

  setTimeout(()=>{this.router.navigateByUrl('getallcomponies')},200); 
}







removeCompany(company:Company){
   
  this._restService.company = company;
  
  
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
  this._restService.removeCompany(this._restService.company).subscribe(

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
 
setTimeout(()=>{this.router.navigateByUrl('getallcomponies')},200); 

}

}









