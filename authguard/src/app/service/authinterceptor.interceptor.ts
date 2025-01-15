import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { json } from 'stream/consumers';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const userservice = inject(UserserviceService);
  const token = userservice.currentToken;
  // const username = userservice.currentToken;
  
  // const username = userservice.currentusername;
   console.log(token);
  //  console.log(username);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        // XUser: `${username}`,
      },
    }),
    console.log('Modified Request:', req);
  }
  return next(req);

}
