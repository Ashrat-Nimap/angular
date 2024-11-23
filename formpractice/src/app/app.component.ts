import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formpractice';
  submitted = false;

  // registerForm = new FormGroup({
  //   username: new FormControl('',[Validators.required]),
  //   email : new FormControl('',[Validators.required,Validators.email]),
  //   Password :  new FormControl('',[Validators.required])
  // })

  // get username() {
  //   return this.registerForm.get('username');
  // }

  // get email() {
  //   return this.registerForm.get('email');
  // }

  // get Password() {
  //   return this.registerForm.get('Password');
  // }

  registerForm = {
    username: '',
    email: ''
  };

  onSubmit(){
    this.submitted = true; 
    if(this.registerForm){
      console.log(this.registerForm);
    }
  }
 
}
