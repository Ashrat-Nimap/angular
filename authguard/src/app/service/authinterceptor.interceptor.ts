import { HttpInterceptorFn } from '@angular/common/http';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  setTimeout(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('Modified Request:', req);
    }
  }, 2000);

  return next(req);
};
