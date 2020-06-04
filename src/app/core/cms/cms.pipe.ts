import { Pipe, PipeTransform } from '@angular/core';
import { CMSService }          from './cms.service';

@Pipe({
  name: 'CMS',
  pure: false
})
export class CmsPipe implements PipeTransform{
  constructor (private _CmsService: CMSService) { }

  transform (key: any) {
    return this._CmsService.getContentFromKey(key);
   }
}
