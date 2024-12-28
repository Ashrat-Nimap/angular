import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url = "http://localhost:3000/users";
  constructor(private http: HttpClient, private router: Router) { }

  registeruser(userdata: any): Observable<any> {
    return this.http.post(this.url, userdata);
  }

  getuser(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.url}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.settoken();
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    )
  }

  islogin() {
    return localStorage.getItem('token') !== null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  settoken(){
    const authtoken = "fake-jwt-token";
    return localStorage.setItem('token', authtoken);

  }
  gettoken() {
    return localStorage.getItem('token');
  }

}
