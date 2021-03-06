import {Component, Injector} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';
import {Meta, Title} from '@angular/platform-browser';

declare const $: any;

class InitialVMState {
}

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector,
              private titleService: Title,
              private meta: Meta) {
    super(_LocalInjector);
    this.meta.addTag(
      {name: 'description', content: 'El uso no autorizado de las marcas por parte de terceros es ilegal y\n' +
          'perjudica a sus titulares, las marcas son derechos de propiedad intelectual'}
    );

    this.meta.updateTag(
      {name: 'description', content: 'El uso no autorizado de las marcas por parte de terceros es ilegal y\n' +
          'perjudica a sus titulares, las marcas son derechos de propiedad intelectual'},
    );
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  init() {
    this.renderSlider();
    this.setTitle('Protección de Marcas de Fábrica | JP Van Hasselt');

  }

  renderSlider() {

    $('.tp-five').show().owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
    $('.tp-video').show().owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      video: true,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
    });
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  }
}
