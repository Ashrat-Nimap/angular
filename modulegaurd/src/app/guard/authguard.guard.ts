import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authserv = inject(AuthserviceService);
  const currentPath = state.url;
  const isAdmin = authserv.isadmin();
  const isSupervisor = authserv.issupervisor();
  if (!isAdmin && !isSupervisor) {
    router.navigate(['/login']);
    return false;
  }
  if (currentPath === '/category') {
    if (!isAdmin) {
      router.navigate(['/product']);
      return false;
    }
  } else if (currentPath === '/product') {

    if (!isSupervisor) {
      router.navigate(['/category']);
      return false;
    }
  }
  return true;
};
