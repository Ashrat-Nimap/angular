import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  private url2 = "http://localhost:3000/task";
  constructor(private http: HttpClient, private router: Router) { }
 
  
  registeruser(userdata: any): Observable<any> {
    return this.http.post(this.url, userdata);
  }

  getUser(email: string, password: string): Observable<any> {
    return this.http
      .get<any[]>(this.url, {
        params: { email, password },
      })
      .pipe(
        map((users) => {
          if (users.length > 0) {
            const user = users[0]; // Get the first matching user
            const token = user.token; // Extract the token
            const username = user.name;
            localStorage.setItem('token', token); // Store token as a string
            return user;
          }
          return null;
        }),
        catchError((error) => {
          console.error('Error fetching users:', error);
          return of(null);
        })
      );
  }
  
  islogin() {
    return localStorage.getItem('token') !== null;
  }

  getToken(){
   return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


  addtask(taskdata : any) : Observable<any>{
    return this.http.post(this.url2,taskdata);
  }

}
