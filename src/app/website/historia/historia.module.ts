import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { HistoriaComponent } from './historia.component';
import { CMSModule } from '../../core/cms/cms.module';



@NgModule({
  declarations: [HistoriaComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: HistoriaComponent
      }
    ])
  ]
})
export class HistoriaModule { }
