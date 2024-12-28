import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-list-parent',
  templateUrl: './customer-list-parent.component.html',
  styleUrl: './customer-list-parent.component.css'
})
export class CustomerListParentComponent {
  
  customer : any[] =[
    {id:1,name:'John',age:25,email : 'john@gmail.com'},
    {id:2,name:'Anna',age:30,email : 'anna@gmail.com'},
    {id:3,name:'Peter',age:35,email : 'peter@gmail.com'},
    {id:4,name:'Linda',age:40,email : 'linda@gmail.com'},
    {id:5,name:'Tom',age:45,email : 'tom@gmail.com'},
  ]

}
