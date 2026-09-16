import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Login } from './login/login';
import { Apirest } from './apirest/apirest';
import { Estado } from './estado/estado';

import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-home',
  template: ''
})
export class HomeComponent {}

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'formulario',
    component: Formulario
  },

  {
    path: 'apirest',
    component: Apirest
  },

  { 
    path: 'estado', 
    component: Estado 
  }
];
