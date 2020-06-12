import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path        : 'home',
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path        : 'infracciones',
    loadChildren: () => import('./infracciones/infracciones.module').then(e => e.InfraccionesModule)
  },
  {
    path        : 'biografia',
    loadChildren: () => import('./biografia/biografia.module').then(e => e.BiografiaModule)
  },
  {
    path        : 'latam',
    loadChildren: () => import('./latam/latam.module').then(e => e.LatamModule)
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
