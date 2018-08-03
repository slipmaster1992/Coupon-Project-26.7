export class Customer{
    
    constructor (public custName?:string, public password?:string, private customer?: Customer,private id?: number)
    {

      if (this.customer != null) {
    
        this.id = customer.id;
        this.custName = customer.custName;
        this.password = customer.password;
       }

    }




    get _id(): number
    {
     return this.id;
    }
  
    set _id(newId: number)
    {
      this.id = newId;
    }
  
    get _custName(): string
    {
      return this.custName;
    }
  
    set _custName(newCustName: string)
    {
      this.custName = newCustName;
    }
  
    get _password(): string
    {
      return this.password;
    }
  
    set _password(newPassword: string)
    {
      this.password = newPassword;
    }
  






}