import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authservice : AuthserviceService,private router : Router){}

  loginform = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  })


  onSubmit(){
    if(this.loginform.valid){
      const { email, password } = this.loginform.value;
      this.authservice.getuser(email!,password!).subscribe((data) =>{
        if(data){
            this.router.navigate(['/category']);
        }else{
          alert("invalid credit");
        }
      })
    }
  }

}
