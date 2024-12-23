import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url  = " http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  registeruser(data:any) : Observable<any>{
    return this.http.post(this.url,data);
  }

  getuser(email:string , password:string) : Observable<boolean>{
     return this.http.get<any[]>(`${this.url}`).pipe(
      map((users)=>{
        if(users.email === email && users.password === password){
          const token = "ff-c-jwt";
          localStorage.setItem("token",token);
          return true;
        }
        return false;
      })
     )
  }




}
