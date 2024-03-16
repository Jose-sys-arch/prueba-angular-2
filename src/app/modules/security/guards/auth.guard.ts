import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { TokenDecode } from '../../../interfaces/general.interface';

export const authGuard: CanActivateFn = (route, state) => {
  let document = inject(DOCUMENT);
  const sessionStorage = document.defaultView?.sessionStorage;
  let router = inject(Router);
  const token = sessionStorage?.getItem('token');
  let decoded: TokenDecode = {
    email: '',
    role: 'USER',
    id: 0,
  };

  if (token) {
    decoded = jwtDecode(token);
  }
  console.log(decoded.id.toString());
  sessionStorage?.setItem('id', decoded.id.toString());
  console.log(decoded);
  if (route.routeConfig?.path == 'login') {
    if (token) {
      if (decoded?.role == 'USER') {
        router.navigate(['/admin']);
        return false;
      } else {
        router.navigate(['/user']);
        return false;
      }
    } else {
      return true;
    }
  } else if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
