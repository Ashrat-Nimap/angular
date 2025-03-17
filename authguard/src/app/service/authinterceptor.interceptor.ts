import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { json } from 'stream/consumers';
import { catchError, tap, throwError } from 'rxjs';
import { error } from 'console';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserserviceService);
  const token = userService.getToken();
  const username = userService.getUsername();
  

  if (req.url === 'http://localhost:3000/users' && !req.params.has('login')) {
    console.log('Bypassing interceptor for GET login request:', req.url);
    return next(req); // Proceed without modifying the request
  }
  console.log(token);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        Xuser: `${username}`
      },
    }),
      console.log('Modified Request:', req);
  }
  return next(req).pipe(
    catchError((error : HttpErrorResponse)=>{
      let errorMessage = "Something went wrong";
      if(error.error instanceof HttpErrorResponse){
        errorMessage = `${error.error.message}`
      }else {
        errorMessage = `${error.status} - ${error.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage)
    })
  );

}
