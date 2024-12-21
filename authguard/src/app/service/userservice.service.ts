import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  constructor(private http:HttpClient,private router : Router) { }

  registeruser(userdata : any) : Observable<any>{
    return this.http.post(this.url,userdata);
  }

  getuser(email:string,password : string) : Observable<boolean>{
    return this.http.get<any[]>(`${this.url}?email=${email}&password=${password}`).pipe(
        map(users =>{
          if(users.length > 0){
            const authtoken = "fake-jwt-token";
            localStorage.setItem('authtoken', authtoken);
            return true;
          }
          return false;
        }),
        catchError(()=>of(false))
    )
  }
  
  islogin(){
    return localStorage.getItem('authtoken') !== null;
  }
  logout(){
    // localStorage.removeItem('authtoken');
    this.router.navigate(['/login']);
  }

}
