import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

class InitialVMState {}

@Component({
  selector: 'app-latam',
  templateUrl: './latam.component.html',
  styleUrls: ['./latam.component.scss']
})
export class LatamComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
  slides = [
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
  slideConfig = {slidesToShow: 2, slidesToScroll: 4};

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}
