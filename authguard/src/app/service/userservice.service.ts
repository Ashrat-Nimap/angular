import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  private url2 = "http://localhost:3000/login";
  constructor(private http: HttpClient, private router: Router) { }

  registeruser(userdata: any): Observable<any> {
    return this.http.post(this.url, userdata);
  }

  getuser(email: string, password: string): Observable<boolean> {
    return this.http
      .get<any>(this.url, {
        params: { email, password }, // Filter on the server
      })
      .pipe(
        map((users) => {
          // Check if the user exists
          const user = users.find(
            (user: { email: string; password: string; }) => user.email === email && user.password === password
          );  
          if (user) {
            this.settoken();
            console.log('Email:', email);
            console.log('Password:', password);
            debugger
            return true;
          }
          return false;
        }),
        catchError((error) => {
          console.error('Error fetching users:', error);
          return of(false);
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

  settoken() : void {
    const authtoken = "fake-jwt-token";
    localStorage.setItem('token', authtoken);
  }
  gettoken(): string | null {
    return localStorage.getItem('token');
  }
  // getusername(name: string) {
  //   return this.http.get<any>(`${this.url}?name=${name}`).pipe(map(users => users[0]));
  // }
}
