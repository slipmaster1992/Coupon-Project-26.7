import { Component, OnInit } from '@angular/core';
import {RestService} from '../../Services/rest.service';
import {Company} from '../../common/Company';
import swal from 'sweetalert2';



@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})


export class CreateCompanyComponent implements OnInit {

 
public companyName:string;
public password:string;
public email:string;
public company:Company;

  constructor(private _restService:RestService) { }


  
  ngOnInit() {
  }

  
  createCompany(company:Company) {

    this.company = new Company(this.companyName, this.password, this.email);
 
   
     const self = this;
     this._restService.createCompany(this.company).subscribe(
      (response) => {
          swal(self.company._companyName, ' was created.' , 'success');
      },
      () => {
          swal(self.company._companyName , ' was not created, company maybe already exist.' , 'error');
      }
    );
   this.clearMembers();
   }
 
 
   // Clear All Members
   clearMembers() {
     this.companyName = null;
     this.password = null;
     this.email = null;
    
   }
}



