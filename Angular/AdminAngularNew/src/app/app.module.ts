import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RestService} from '../app/Services/rest.service';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { GetAllComponiesComponent } from './components/get-all-componies/get-all-componies.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    GetAllComponiesComponent,
    CreateCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [SweetAlert2Module.forRoot({
    buttonsStyling: false,
    customClass: 'modal-content',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn'
}),
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot([
    {
      path:'createcompany',
      component: CreateCompanyComponent
    },
    
    {
      path:'getallcomponies',
      component: GetAllComponiesComponent
    },
    {
      path:'createcustomer',
      component: CreateCustomerComponent
    },
    
    {
      path:'getallcustomers',
      component: GetAllCustomersComponent
    }
  ]),
    BrowserModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
