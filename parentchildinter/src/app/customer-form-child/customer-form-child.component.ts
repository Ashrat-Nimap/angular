import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customer-form-child',
  templateUrl: './customer-form-child.component.html',
  styleUrl: './customer-form-child.component.css'
})
export class CustomerFormChildComponent {
  @Input() customer!: Customer;
  @Output() update = new EventEmitter<Customer>();

  customerform:FormGroup;

  constructor(private fb:FormBuilder){
    this.customerform =  this.fb.group({
      name: [''],
      email: [''],
      age: [0],
    });
  }

  ngOnChanges(changes:SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes['customer'] && this.customer){
      this.customerform.patchValue({
        name:this.customer.name,
        email:this.customer.email,
        age:this.customer.age
      });
    }
  }

  submit(){
    const updatedCustomer={...this.customer,...this.customerform.value};
    this.update.emit(updatedCustomer);
  }



}
