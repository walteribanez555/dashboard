import { Routes } from '@angular/router';
import { authGuard } from '../Auth/guards/Auth.guard';
import { NotFoundComponent } from './pages/NotFound/NotFound.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
  {
    path : '',
    redirectTo : 'dashboard',
    pathMatch : 'full',
  },
  {
    path : '',
    component : AppComponent,
    children : [
      {
        path : 'dashboard',
        canActivate : [authGuard],
        loadChildren: () =>
          import('./modules/dashboard/dashboard.routes').then((m) => m.routes),
      },
      {
        path : 'auth',
        loadChildren :  () => import('./modules/auth/auth.routes').then(m => m.routes),
      },

    ]
  },

  {
    path : '**',
    component : NotFoundComponent,
  }
];
