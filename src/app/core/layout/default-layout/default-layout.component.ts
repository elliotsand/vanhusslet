import {Component, Injector} from '@angular/core';
import {CMSService} from '../../cms/cms.service';
import {RoutedViewModelComponent} from '../../routed-ViewModel.component';
import {AppService} from '../../../../app/app.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent extends RoutedViewModelComponent {
  public vm = {
    content: {
      global: {
        navigation: {
          inicio: {
            es: 'Inicio',
            en: 'Home'
          },
          biografia: {
            es: 'Biografía',
            en: 'Biography'
          },
          latam: {
            es: 'Marcas en LATAM',
            en: ' Trademarks in LATAM'
          },
          infracciones: {
            es: 'Protección de marcas de fábrica',
            en: 'Trademark protection'
          },
          contacto: {
            es: 'Contacto',
            en: 'Contact'
          }
        },
        navigationUrl: {
          inicio: {
            es: '/',
            en: '/'
          },
          biografia: {
            es: '/juan-pedro-van-hasselt',
            en: '/juan-pedro-van-hasselt'
          },
          infracciones: {
            es: '/proteccion-de-marcas-de-fabrica',
            en: '/Trademark-protection'
          },
          latam: {
            es: '/proteccion-de-marcas-en-latam',
            en: '/Trademarks-in-LATAM'
          },
          contacto: {
            es: 'contactar-van-hasselt',
            en: 'contact-van-hasselt'
          }
        },
        horarios: {
          es: 'Horarios de Atención',
          en: 'Office Hours'
        },
        dias: {
          es: 'Lun - Sab',
          en: 'Mon - Sat'
        },
        email: {
          es: 'Ingresa tu correo',
          en: 'Enter your email'
        },
        mensaje: {
          es: 'Gracias <br> Estaremos contactándonos contigo',
          en: 'Thanks <br> We will be contacting you'
        },
      }
    }
  };

  constructor(private _LocalInjector: Injector,
              public _CMSService: CMSService,
              public _AppService: AppService) {
    super(_LocalInjector);
  }

  init() {
    console.log(this._ActivatedRoute.snapshot);
  }

  changeLanguage(lang: string): void {
    this._CMSService.currentLanguage = lang;
  }

  mensaje() {
    this._AppService.submitFormContact();
  }

  cerrar() {
    this._AppService.closeMessage();
  }
}
