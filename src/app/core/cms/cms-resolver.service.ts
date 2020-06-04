import { Injectable } from '@angular/core';
import { Resolve }    from '@angular/router';
import { CMSService } from './cms.service';

@Injectable({
  providedIn: 'root'
})
export class CMSResolver implements Resolve<any> {
  constructor(private _CmsService: CMSService) {}

  resolve () {
    return this._CmsService.getContent();
  }
}
