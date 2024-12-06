import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularmaterial';

  form = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  onSubmit() {
    console.log(this.form.value);  // Log form values to the console
  }



}
