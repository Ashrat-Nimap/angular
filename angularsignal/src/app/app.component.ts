import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularsignal';

   count = signal(0);
   doublecounter = computed(()=> this.count() * 2);

   increment(){
    // this.count.set(this.count() + 1);
    this.count.update((value) => value + 1);
   }



}
