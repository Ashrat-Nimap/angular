import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  registeruser(userdata : any) : Observable<any>{
    return this.http.post(this.url,userdata);
  }

  getuser(email:any,password : any) : Observable<any>{
    return this.http.get(this.url).pipe(
        
    )
  }
}
