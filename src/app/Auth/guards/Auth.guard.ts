import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);


  // router.navigateByUrl('/auth');

  return true;
};
