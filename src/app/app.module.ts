import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/home/home.component';
import { SociosComponent } from './website/socios/socios.component';
import { HistoriaComponent } from './website/historia/historia.component';
import { ContactoComponent } from './website/contacto/contacto.component';
import {ClienteComponent} from './website/cliente/cliente.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'socio', component: SociosComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SociosComponent,
    HistoriaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
