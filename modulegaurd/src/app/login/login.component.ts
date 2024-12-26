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
      this.authservice.getuser(email!,password!).subscribe(() =>{
        if(this.authservice.isadmin()){
            if(this.authservice.issupervisor()){
              alert("access denied");
            }
            this.router.navigate(['/category']);
        }else if(this.authservice.issupervisor()){
          if(this.authservice.isadmin()){
            alert("access denied");
          }
          this.router.navigate(['/product']);
        }else{
          alert("invalid details");
        }
      })
    }
  }

}
