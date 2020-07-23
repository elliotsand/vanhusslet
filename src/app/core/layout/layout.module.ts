import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { RouterModule }           from '@angular/router';
import { CMSModule }              from '../cms/cms.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CMSModule
  ],
  exports: [DefaultLayoutComponent]
})
export class LayoutModule { }
