import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserserviceService } from './userservice.service';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const token = inject(UserserviceService).gettoken();
  console.log(token);
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('Modified Request:', req);
  }
  return next(req);
};
