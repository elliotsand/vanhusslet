import { Component, Injector } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

declare const $: any;

class InitialVMState {}

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }

  init () {
    this.renderSlider();
  }

  renderSlider () {
    $('.tp-banner').show().revolution({
      delay              : 6000,
      startheight        : 750,
      startwidth         : 1170,
      hideThumbs         : 1000,
      navigationType     : 'none',
      touchenabled       : 'on',
      onHoverStop        : 'on',
      navOffsetHorizontal: 0,
      navOffsetVertical  : 0,
      dottedOverlay      : 'none',
      fullWidth          : 'on'
    });
  }
}
