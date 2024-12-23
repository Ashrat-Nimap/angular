import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authservice : AuthserviceService,private router : Router){}


  registerform = new FormGroup({
    Username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    roleselection : new FormControl('')
  })

  onSubmit(){
    if(this.registerform.valid){
      this.authservice.registeruser(this.registerform.value).subscribe(()=>{
        this.router.navigate(['/login']);  
      })
    }
  }

}
