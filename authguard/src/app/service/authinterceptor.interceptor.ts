import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { json } from 'stream/consumers';

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
  return next(req);

}
