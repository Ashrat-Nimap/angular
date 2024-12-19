import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userservice : UserserviceService,private router : Router){ }
  register = new FormGroup({
    name : new FormControl(''),
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
  })

  onSubmit(){
    this.userservice.registeruser(this.register.value).subscribe((user : any) => {
      this.router.navigate(['/login']);
    })
  }

}
