import {Component, Injector, OnInit} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';

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

  pages = [
    {img: 'assets/images/gallery/01.jpeg'},
    {img: 'assets/images/gallery/02.jpeg'},
    {img: 'assets/images/gallery/03.jpeg'},
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

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }

  init() {
    this.renderSlider();
  }

  renderSlider() {
    $('.tp-banner').show().revolution({
      delay: 6000,
      startheight: 750,
      startwidth: 1170,
      hideThumbs: 1000,
      navigationType: 'none',
      touchenabled: 'on',
      onHoverStop: 'on',
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: 'none',
      fullWidth: 'on'
    });
    $('.tp-video').show().revolution({
      delay: 6000,
      startheight: 750,
      startwidth: 1170,
      hideThumbs: 1000,
      navigationType: 'none',
      touchenabled: 'on',
      onHoverStop: 'on',
      navOffsetHorizontal: 0,
      navOffsetVertical: 0,
      dottedOverlay: 'none',
      fullWidth: 'on'
    });
  }
}
