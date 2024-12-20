import { HttpInterceptorFn } from '@angular/common/http';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const user = localStorage.getItem('referraltoken');
  if (user) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user}`
      }
    })
    console.log('Modified Request:', req);
  }
  return next(req);
};
