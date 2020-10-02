import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutesEnglish: Routes = [
  {
    path        : '',
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path        : 'juan-pedro-van-hasselt',
    loadChildren: () => import('./historia/historia.module').then(e => e.HistoriaModule)
  },
  {
    path        : 'Trademark-protection',
    loadChildren: () => import('./socios/socios.module').then(e => e.SociosModule)
  },
  {
    path        : 'Trademarks-in-LATAM',
    loadChildren: () => import('./latam/latam.module').then(e => e.LatamModule)
  },
  {
    path        : 'contact-van-hasselt',
    loadChildren: () => import('./contacto/contacto.module').then(e => e.ContactoModule)
  }
];

const appRoutes: Routes = [
  {
    path        : '',
    loadChildren: () => import('./home/home.module').then(e => e.HomeModule)
  },
  {
    path        : 'juan-pedro-van-hasselt',
    loadChildren: () => import('./historia/historia.module').then(e => e.HistoriaModule)
  },
  {
    path        : 'proteccion-de-marcas-de-fabrica',
    loadChildren: () => import('./socios/socios.module').then(e => e.SociosModule)
  },
  {
    path        : 'proteccion-de-marcas-en-latam',
    loadChildren: () => import('./latam/latam.module').then(e => e.LatamModule)
  },
  {
    path        : 'contactar-van-hasselt',
    loadChildren: () => import('./contacto/contacto.module').then(e => e.ContactoModule)
  },
  ...appRoutesEnglish,
  {
    path      : '**',
    redirectTo: '',
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
