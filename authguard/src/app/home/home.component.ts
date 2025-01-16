import { Component } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private userservice : UserserviceService){}

  taskForm  = new FormGroup({
      name : new FormControl([Validators.required]),
      description : new FormControl([Validators.required]),
      dueDate : new FormControl([Validators.required]),
  })

  onlogout(){
      this.userservice.logout();
  }

  onSubmit(){
    this.userservice.addtask(this.taskForm.value).subscribe();
  }

}
