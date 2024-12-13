import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    const obj = new Observable<number>((observer) =>{
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
    });

    obj.subscribe({
      next : (value) => console.log(value),
      complete : () => console.log('observerable completed')
    });
    of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));

    of(2,5,6)
    .pipe(filter((x) => x % 2 == 0))
    .subscribe((w) => console.log(w))

  }


  
}
