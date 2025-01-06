import { Component } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-list-parent',
  templateUrl: './customer-list-parent.component.html',
  styleUrl: './customer-list-parent.component.css'
})
export class CustomerListParentComponent {

  selectedCustomer:Customer|null = null;
  customer : Customer[] =[
    {id:1,name:'John',age:25,email : 'john@gmail.com'},
    {id:2,name:'Anna',age:30,email : 'anna@gmail.com'},
    {id:3,name:'Peter',age:35,email : 'peter@gmail.com'},
    {id:4,name:'Linda',age:40,email : 'linda@gmail.com'},
    {id:5,name:'Tom',age:45,email : 'tom@gmail.com'},
  ]

  handleedit(updatecustomer : Customer) : void{
    const index = this.customer.findIndex((c)=>c.id === updatecustomer.id);
    if(index !== -1){
      this.customer[index] = updatecustomer;
    }
    this.selectedCustomer = null;
  }

  editCustomer(customer:Customer){
    this.selectedCustomer={...customer};
  }

}
