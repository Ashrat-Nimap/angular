import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from '../service/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userservice: UserserviceService, private router: Router) { }
  loginfrom = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  onlogin() {
    if (this.loginfrom.invalid) {
      return
    }

    const { email, password } = this.loginfrom.value;
    this.userservice.getUser(email, password).subscribe({
      next: (response) => {
        if (response) {
          localStorage.setItem('token',response.token);
          this.router.navigate(['/home']);
          console.log('hhuhh',response.token)
        }
        else {
          alert('invalid credentials');
        }
      }
    })
  }


}