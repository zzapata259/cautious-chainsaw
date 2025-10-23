import { CanActivateFn, Router  } from '@angular/router';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
