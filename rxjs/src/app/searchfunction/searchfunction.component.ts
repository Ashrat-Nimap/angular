import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { serialize } from 'node:v8';
import { filter, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-searchfunction',
  templateUrl: './searchfunction.component.html',
  styleUrl: './searchfunction.component.css'
})
export class SearchfunctionComponent {

  data: any = [
    { "username": "ashrat", "email": "ashrat@gmail.com", phone: 921192929, "gender": "male" },
    { "username": "prerna", "email": "prerna@gmail.com", phone: 924567929, "gender": "female" },
    { "username": "rahul", "email": "rahul@gmail.com", phone: 9217865429, "gender": "male" },
    { "username": "pooja", "email": "pooja@gmail.com", phone: 92098732929, "gender": "female" },
    { "username": "nidhi", "email": "nidhi@gmail.com", phone: 9217865429, "gender": "female" },
    { "username": "aftab", "email": "aftab@gmail.com", phone: 925678929, "gender": "male" },
    { "username": "shahid", "email": "shahid@gmail.com", phone: 9908763229, "gender": "male" },
    { "username": "aman", "email": "aman@gmail.com", phone: 989542129, "gender": "male" },
    { "username": "nisha", "email": "nisha@gmail.com", phone: 927854629, "gender": "female" },
    { "username": "sumeet", "email": "sumeet@gmail.com", phone: 9219087929, "gender": "male" },
    { "username": "jadhav", "email": "gupta@gmail.com", phone: 92107687929, "gender": "male" },
  ]
  //filterdat: any = [...this.data];
  searchControl=new FormControl();
  filterData=of(this.data);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class;
    this.searchControl.valueChanges.pipe(
      switchMap(value=>this.filtersearch(value))
    ).subscribe((value:any)=>{
      this.filterData=of(value);
    });
  }

  filtersearch(search:string) :Observable<any>{
   //const search = event.target.value.toLowerCase();
    if (!search) {
      return of(this.data);
      //...this.data];
    }
    const filterdat = this.data.filter((item: any) => 
        item.username.toLowerCase().includes(search) || item.email.toLowerCase().includes(search));
      return of(filterdat);
  }
}

