import {Component, Injector, OnInit} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';
import {Meta, Title} from '@angular/platform-browser';

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

  constructor(private _LocalInjector: Injector,
              private titleService: Title,
              private meta: Meta) {
    super(_LocalInjector);
    this.meta.addTag(
      { name: 'description', content: 'Juan Pedro Van Hasselt abogado especialista en el campo de propiedad\n' +
          'intelectual en temas de competencia, protección al consumidor y marcas.\n' }
    );

    this.meta.updateTag(
      { name: 'description', content: 'Juan Pedro Van Hasselt abogado especialista en el campo de propiedad\n' +
          'intelectual en temas de competencia, protección al consumidor y marcas.\n' },
    );
    const description = this.meta.getTag('name=description');
    console.log(description.content);
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  init() {
    this.renderSlider();
    this.setTitle('Juan Pedro Van Hasselt Protección de Marcas | JP Van Hasselt');
  }

  renderSlider() {

    $('.tp-perfil').show().owlCarousel({
      stagePadding: 0,
      loop: false,
      margin: 10,
      nav: true,
      items: 1
    });
    $('.tp-video').show().owlCarousel({
      stagePadding: 0,
      loop: false,
      margin: 10,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      items: 1
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
    $('.video-responsive').muted = true;
  }
}
