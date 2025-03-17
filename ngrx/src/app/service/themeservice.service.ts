import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

  constructor() { }
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();

  toggletheme(){
    const currenttheme = this.themeSubject.getValue();
    const newtheme = currenttheme === 'light' ? 'dark' : 'light';
    this.themeSubject.next(newtheme);
  }

  setTheme(theme : string){
    this.themeSubject.next(theme);
  }

  get currentTheme() : string{
    return this.themeSubject.getValue();
  }
}
