import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const isauth = inject(UserserviceService).islogin();
  if (isauth) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
