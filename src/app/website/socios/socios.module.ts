import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { CMSModule } from '../../core/cms/cms.module';
import { SociosComponent } from './socios.component';


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
