import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { CMSModule }     from '../../core/cms/cms.module';
import { ContactoComponent } from './contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    CMSModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactoComponent
      }
    ])
  ]
})
export class ContactoModule { }
