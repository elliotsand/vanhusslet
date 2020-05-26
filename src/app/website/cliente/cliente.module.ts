import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { ClienteComponent } from './cliente.component';



@NgModule({
  declarations: [ClienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClienteComponent
      }
    ])
  ]
})
export class ClienteModule { }
