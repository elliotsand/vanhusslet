import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { CMSService }                                      from './cms.service';

@Directive({
  selector: '[CMS]'
})
export class CMSDirective implements OnChanges {
  @Input('CMS')
  key: any;

  constructor (private el: ElementRef,
               private _CMSService: CMSService) {}

  ngOnChanges () {
    if (this.key) {
      this.el.nativeElement.innerHTML = this._CMSService.getContentFromKey(this.key);
    }
  }
}
