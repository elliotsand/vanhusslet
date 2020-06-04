import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { CMSModule }    from './cms/cms.module';
import { LayoutModule } from './layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    CMSModule
  ],
  exports: [
    LayoutModule,
    CMSModule
  ]
})
export class CoreModule { }
