import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { CMSDirective }     from './cms.directive';
import { CmsPipe }          from './cms.pipe';

@NgModule({
  declarations: [CmsPipe, CMSDirective],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CmsPipe,
    CMSDirective
  ]
})
export class CMSModule {}
