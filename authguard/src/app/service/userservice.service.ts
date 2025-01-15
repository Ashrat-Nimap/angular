import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  // private url2 = "http://localhost:3000/login";
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  constructor(private http: HttpClient, private router: Router) { }
  get token() {
    return this.tokenSubject.asObservable();
  }

   
  get currentToken(): string | null {
    return this.tokenSubject.value;
  }
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
  
            if (typeof token === 'string') {
              localStorage.setItem('token', JSON.stringify({token,username})); // Store token as a string
              // localStorage.setItem('username',username);
              this.tokenSubject.next(token); // Update BehaviorSubject
              // this.userSubject.next(username);
              return user;
            } else {
              console.error('Token is not a string:', token);
              return null;
            }
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
  logout() {
    localStorage.removeItem('token');
    // this.tokenSubject.next(null);
    // this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}
