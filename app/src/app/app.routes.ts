import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Apirest } from './apirest/apirest';
import { Estado } from './estado/estado';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'apirest',
    component: Apirest
  }


  { path: 'estado', component: Estado }
];
