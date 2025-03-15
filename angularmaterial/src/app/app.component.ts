import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

  isDarkTheme = signal(false);

  toggleTheme() {
    this.isDarkTheme.update((current) => !current);

    // Toggle theme class on the `body` element
    const themeClass = this.isDarkTheme() ? 'dark-theme' : 'light-theme';
    document.body.className = themeClass;
  }
  applyTheme(theme: 'dark' | 'light') {
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }
  



}
