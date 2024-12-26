import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = " http://localhost:3000/users";
  constructor(private http: HttpClient, private router: Router) { }

  registeruser(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  getuser(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.url).pipe(
      map((users: any[]) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
          const token = "fake-jwt";
          localStorage.setItem('token', token);
          localStorage.setItem('role',user.roleselection);
          return true;
        }
        return false;
      }));
  }

  islogin(){
    return localStorage.getItem('token') !== null;
  }

  isadmin(){
    return localStorage.getItem('role') === 'admin';
  }

  issupervisor(){
    return localStorage.getItem('role') === 'supervisor';
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }


}
