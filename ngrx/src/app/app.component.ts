import { Component, OnInit } from '@angular/core';
import { Store,} from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/reducer/action/couter.actions';
import { ThemeserviceService } from './service/themeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ngrx';
  count$ : Observable<number>;
  currenttheme : string = 'light';

  constructor(private store : Store<{ count : number}>,private themeService  : ThemeserviceService){
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme =>{
      if (typeof document !== 'undefined') {
        document.body.className = theme;
      }
      this.currenttheme = theme;
    })  
  }

  toggleTheme(){
    this.themeService.toggletheme();
  }

  increment(){
    this.store.dispatch(increment());

  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset());
  }
}
