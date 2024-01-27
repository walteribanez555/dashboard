import {
  HttpStatusCode,
  type HttpErrorResponse,
  type HttpHandlerFn,
  type HttpInterceptorFn,
  type HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { errorHandler } from '../../Core/handlers/error.handler';
import { inject } from '@angular/core';
import { TokensService } from '../../Shared/utils/Tokens.service';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {

  const tokenService = inject(TokensService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const errorType = errorHandler(error);

      switch (errorType) {
        case HttpStatusCode.BadRequest:
          break;
        case 498:
          console.log('Expiro la Sesion');
          tokenService.deleteToken();
      }

      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        console.log('this is client side error');
        errorMsg = `Client Error: ${error.error.message}`;
      } else {
        console.log('this is server side error');
        errorMsg = `Server Error Code: ${error.status}, Message: ${error.message}`;
      }

      console.log(errorMsg);
      return throwError(() => errorMsg);
    })
  );
};
