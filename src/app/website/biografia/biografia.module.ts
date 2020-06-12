import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { BiografiaComponent } from './biografia.component';
import { CMSModule } from '../../core/cms/cms.module';



@NgModule({
  declarations: [BiografiaComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: BiografiaComponent
      }
    ])
  ]
})
export class BiografiaModule { }
