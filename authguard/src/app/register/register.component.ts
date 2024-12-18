import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userservice : UserserviceService){}
  register = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  })


  onSubmit(){
    this.userservice.registeruser(this.register.value).subscribe((user : any) => {
      console.log(user);
    })
  }

}
