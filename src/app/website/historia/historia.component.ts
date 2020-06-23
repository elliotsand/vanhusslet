import {Component, Injector, OnInit} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';

declare const $: any;

class InitialVMState {
}

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent extends RoutedViewModelComponent {
  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }

  init() {
    this.renderSlider();
  }

  renderSlider() {

    $('.tp-perfil').show().owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });
    $('.tp-video').show().owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });
    $('.postimg').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
    });
  }
}
