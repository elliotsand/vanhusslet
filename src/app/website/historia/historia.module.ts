import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { HistoriaComponent } from './historia.component';



@NgModule({
  declarations: [HistoriaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HistoriaComponent
      }
    ])
  ]
})
export class HistoriaModule { }
