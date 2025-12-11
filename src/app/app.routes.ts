import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login', loadComponent: () => {
      return import('./auth/pages/login-screen/login-screen').then(m => m.LoginScreen)
    }
  },
  {
    path: 'home', loadComponent: () => {
      return import('./home/pages/home/home').then(m => m.Home)
    }
  },
  {
    path: 'myfiles', loadComponent: () => {
      return import('./home/pages/my-files/my-files').then(m => m.MyFiles)
    }
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
