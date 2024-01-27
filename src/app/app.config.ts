import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorInterceptor } from './It/interceptors/Error.interceptor';
import { sessionInterceptor } from './It/interceptors/Session.interceptor';
import { routes } from './View/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([sessionInterceptor, httpErrorInterceptor]),
    ),
  ],
};
