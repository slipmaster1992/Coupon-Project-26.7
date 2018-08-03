import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Company} from '../common/Company';
import{Customer} from '../common/Customer';
import 'rxjs/add/operator/map';



@Injectable()
export class RestService {

  
  public company:Company;
  public customer:Customer;
  
  constructor(private _http:Http) {

   }

  
  
  //Creating New Company
  public createCompany(company: Company) {

    const promise = this._http.post("http://localhost:8080/adminws/createcompany", company);
    return promise;
  }

  
 
  //Removing Company
  public removeCompany(company: Company) {

    const promise = this._http.patch("http://localhost:8080/adminws/removecompany", company);
    return promise;
  }



  //Updating Company
public updateCompany(company: Company) {

  const promise = this._http.put("http://localhost:8080/adminws/updatecompany", company);
  return promise;
}


  

//Getting All Exist Componies
public getAllComponies() {
  
  const promise = this._http.get("http://localhost:8080/adminws/getcomponies")
  .map(
    (companyResponse) => {
      return companyResponse.json();
    }
  );
  return promise;
}





 //Creating New Customer
 public createCustomer(customer: Customer) {

  const promise = this._http.post("http://localhost:8080/adminws/createcustomer", customer);
  return promise;
}





  //Removing Customer
  public removeCustomer(customer: Customer) {

    const promise = this._http.patch("http://localhost:8080/adminws/removecustomer", customer);
    return promise;
  }



  //Updating Customer
  public updateCustomer(customer: Customer) {

    const promise = this._http.put("http://localhost:8080/adminws/updatecustomer", customer);
    return promise;
  }


  //Getting All Exist Customers
public getAllCustomers() {
  
  const promise = this._http.get("http://localhost:8080/adminws/getallcustomers")
  .map(
    (customerResponse) => {
      return customerResponse.json();
    }
  );
  return promise;
}







}
