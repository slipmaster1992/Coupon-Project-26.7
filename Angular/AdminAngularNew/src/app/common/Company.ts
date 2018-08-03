


    export class Company{
        
        constructor (public companyName?:string, public password?:string, public email?:string, private company?: Company, private id?: number)
        {
    
            if (this.company != null) {
    
                this.id = company.id;
                this.companyName = company.companyName;
                this.password = company.password;
                this.email = company.email;
             
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
      
        get _companyName(): string
        {
          return this.companyName;
        }
      
        set _companyName(newCompanyName: string)
        {
          this.companyName = newCompanyName;
        }
      
        get _password(): string
        {
          return this.password;
        }
      
        set _password(newPassword: string)
        {
          this.password = newPassword;
        }
      
        get _email(): string
        {
          return this.email;
        }
      
        set _email(newEmail: string)
        {
          this.email = newEmail;
        }
      
     
       
      
      }
    
    
   

