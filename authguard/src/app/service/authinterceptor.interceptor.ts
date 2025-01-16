import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { json } from 'stream/consumers';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(UserserviceService).getToken();
   console.log(token);
   if (req.url.includes('/login')) {
    console.log('Bypassing interceptor for login URL:', req.url);
    return next(req); // Proceed without modifying the request
  }
 
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }),
    console.log('Modified Request:', req);
  }
  return next(req);

}
