import { Coupon } from './Coupon';
export class Company {

  constructor(private compName: string , private password: string ,
              private email: string , private company?: Company, private coupons?: Coupon[] , private id?: number) {
              }
            }