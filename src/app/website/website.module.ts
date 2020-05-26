import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path        : 'home',
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path        : 'socio',
    loadChildren: () => import('./socios/socios.module').then(e => e.SociosModule)
  },
  {
    path        : 'historia',
    loadChildren: () => import('./historia/historia.module').then(e => e.HistoriaModule)
  },
  {
    path        : 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(e => e.ClienteModule)
  },
  {
    path        : 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then(e => e.ContactoModule)
  },
  {
    path      : '**',
    redirectTo: 'home',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class WebsiteModule {}
