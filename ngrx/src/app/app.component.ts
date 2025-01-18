import { Component } from '@angular/core';
import { Store,} from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './store/reducer/action/couter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx';


  count$ : Observable<number>;

  constructor(private store : Store<{ count : number}>){
    this.count$ = store.select('count');
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
