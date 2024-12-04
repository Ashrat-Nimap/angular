import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private  apiUrl = "http://localhost:3000/users";
  constructor(private http : HttpClient) { }

  getusers():Observable<any[]>{
     return this.http.get<any[]>(this.apiUrl);
  }

}
