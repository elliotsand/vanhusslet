import {Component, Injector, OnInit} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';
import {Meta, Title} from '@angular/platform-browser';

declare const $: any;

class InitialVMState {
}

@Component({
  selector: 'app-latam',
  templateUrl: './latam.component.html',
  styleUrls: ['./latam.component.scss']
})
export class LatamComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector,
              private meta: Meta,
              private titleService: Title) {
    super(_LocalInjector);
    this.meta.addTag(
      {name: 'description', content: 'Consulte con un especialista como Van Hasselt en propiedad intelectual\n' +
          'quien le explicara cómo proteger el derecho intelectual de su marca en LATAM'}
    );

    this.meta.updateTag(
      {name: 'description', content: 'Consulte con un especialista como Van Hasselt en propiedad intelectual\n' +
          'quien le explicara cómo proteger el derecho intelectual de su marca en LATAM'},
    );
  }

  Pages = [
    {img: 'assets/images/gallery/01.jpeg'},
    {img: 'assets/images/gallery/02.jpeg'},
    {img: 'assets/images/gallery/03.jpeg'},
    {img: 'assets/images/gallery/04.jpeg'},
    {img: 'assets/images/gallery/05.jpeg'},
    {img: 'assets/images/gallery/06.jpeg'},
    {img: 'assets/images/gallery/07.jpeg'},
    {img: 'assets/images/gallery/08.jpeg'},
    {img: 'assets/images/gallery/09.jpeg'},
    {img: 'assets/images/gallery/10.jpeg'},
    {img: 'assets/images/gallery/11.jpeg'},
    {img: 'assets/images/gallery/12.jpeg'},
    {img: 'assets/images/gallery/13.jpeg'},
    {img: 'assets/images/gallery/14.jpeg'},
    {img: 'assets/images/gallery/15.jpeg'},
    {img: 'assets/images/gallery/16.jpeg'}
  ];

  paises = this.vm.content.latam.paises;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  init() {
    this.renderSlider();
    this.setTitle('Protección de Marcas en LATAM | JP Van Hasselt');

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
