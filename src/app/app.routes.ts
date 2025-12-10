import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login', loadComponent: () => {
      return import('./auth/pages/login-screen/login-screen').then(m => m.LoginScreen)
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
