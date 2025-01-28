import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angulartheme';


  isDarkTheme = signal(false);

  toggleTheme() {
    this.isDarkTheme.update((current) => !current);

    // Toggle theme class on the `body` element
    const themeClass = this.isDarkTheme() ? 'dark-theme' : 'light-theme';
    document.body.className = themeClass;
  }
}
