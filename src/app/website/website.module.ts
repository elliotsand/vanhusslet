import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia/historia.component';
import { ClienteComponent } from './cliente/cliente.component';



@NgModule({
  declarations: [HistoriaComponent, ClienteComponent],
  imports: [
    CommonModule
  ]
})
export class WebsiteModule { }
