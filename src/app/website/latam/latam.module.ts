import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { RouterModule }     from '@angular/router';
import { LatamComponent } from './latam.component';
import {CMSModule} from '../../core/cms/cms.module';


@NgModule({
  declarations: [LatamComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: LatamComponent
      }
    ])
  ]
})
export class LatamModule { }
