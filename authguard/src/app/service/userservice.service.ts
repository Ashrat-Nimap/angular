import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  // private url2 = "http://localhost:3000/login";
  constructor(private http: HttpClient, private router: Router) { }

  registeruser(userdata: any): Observable<any> {
    return this.http.post(this.url, userdata);
  }

  // getuser(email: string, password: string): Observable<any> {
  //   return this.http
  //     .get<any>(this.url, {
  //       params: { email, password }, // Filter on the server
  //     })
  //     .pipe(
  //       map((users) => {
  //         debugger
  //         // Check if the user exists
  //         const user = users.find(
  //           (user: { email: string; password: string; }) => user.email === email && user.password === password
  //         );  
  //         if (user) {
  //           localStorage.setItem('token',user.token);
  //           return user;
  //         }
  //         return false;
  //       }),
  //       catchError((error) => {
  //         console.error('Error fetching users:', error);
  //         return of(false);
  //       })
  //     );
  // }
  getUser(email: string, password: string): Observable<any> {
    return this.http
      .get<any[]>(this.url, {
        params: { email, password } // JSON Server supports this filtering
      })
      .pipe(
        map((users) => {
          // JSON Server returns an array; we only expect one match
          if (users.length > 0) {
            const user = users[0];
            localStorage.setItem('token', user.token); // Save token to localStorage
            return user;
          }
          return false; // Return false if no user is found
        }),
        catchError((error) => {
          console.error('Error fetching users:', error);
          return of(false); // Return false in case of an error
        })
      );
  }
  
  

  islogin() {
    return localStorage.getItem('token') !== null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // settoken() : void {
  //   localStorage.setItem('token',user.token);
  // }
  gettoken(): string | null {
    return localStorage.getItem('token');
  }
  // getusername(name: string) {
  //   return this.http.get<any>(`${this.url}?name=${name}`).pipe(map(users => users[0]));
  // }
}
