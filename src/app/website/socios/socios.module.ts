import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { SociosComponent } from './socios.component';
import { CMSModule } from '../../core/cms/cms.module';



@NgModule({
  declarations: [SociosComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: SociosComponent
      }
    ])
  ]
})
export class SociosModule { }
