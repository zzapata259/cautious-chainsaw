import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  // Si ya está logueado, redirige al home
  if (isLoggedIn) {
    router.navigate(['/home']);
    return false;
  }

  // Si no está logueado, puede entrar al login
  return true;
};
