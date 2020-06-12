import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { InfraccionesComponent } from './infracciones.component';
import { CMSModule } from '../../core/cms/cms.module';



@NgModule({
  declarations: [InfraccionesComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfraccionesComponent
      }
    ])
  ]
})
export class InfraccionesModule { }
