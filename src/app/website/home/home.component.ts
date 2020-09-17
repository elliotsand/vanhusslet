import {Component, Injector} from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';

declare const $: any;

class InitialVMState {
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends RoutedViewModelComponent {
  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector,
              private titleService: Title,
              private meta: Meta) {
    super(_LocalInjector);
    this.meta.addTag(
      { name: 'description', content: 'Las marcas son derechos de propiedad intelectual, consulte a un\n' +
          'especialista para denunciar y proteger los derecho de su marca' }
    );

    this.meta.updateTag(
      { name: 'description', content: 'Las marcas son derechos de propiedad intelectual, consulte a un\n' +
          'especialista para denunciar y proteger los derecho de su marca' },
    );
    const description = this.meta.getTag('name=description');
    console.log(description.content);
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
  init() {
    this.renderSlider();
    this.setTitle('Propiedad Intelectual Protección de Marcas Latam | JP Van Hasselt');
  }

  renderSlider() {
    $('.tp-banner').show().revolution({
      delay: 6000,
      startheight: '100vh',
      startwidth: '1170',
      autoWidth: true,
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
