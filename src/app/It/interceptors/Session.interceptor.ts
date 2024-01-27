import { HttpHeaders, type HttpEvent, type HttpHandler, type HttpInterceptorFn, type HttpRequest, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokensService } from '../../Shared/utils/Tokens.service';
import { inject } from '@angular/core';

export const sessionInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
 ) => {

  const tokenService = inject(TokensService);


  const token = tokenService.getToken();
  if (!token) {
    const requestWithDefaultToken = req.clone({
      headers: new HttpHeaders({
      }),
    });
    return next(requestWithDefaultToken);
  } else {
    const requestWithToken = req.clone({
      headers: new HttpHeaders({
        Authorization: token,
      }),
    });
    return next(requestWithToken);
  }
}








