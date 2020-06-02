import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { LatamComponent } from './latam.component';



@NgModule({
  declarations: [LatamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LatamComponent
      }
    ])
  ]
})
export class LatamModule { }
