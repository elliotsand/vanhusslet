import { Component, Injector }      from '@angular/core';
import { CMSService }               from '../../cms/cms.service';
import { RoutedViewModelComponent } from '../../routed-ViewModel.component';

@Component({
  selector   : 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls  : ['./default-layout.component.scss']
})
export class DefaultLayoutComponent extends RoutedViewModelComponent {
  public vm = {
    content: {
      'global': {
        'navigation': {
          'inicio'      : {
            'es': 'Inicio',
            'en': 'Home'
          },
          'biografia'   : {
            'es': 'Biografía',
            'en': 'Biography'
          },
          'marcas'      : {
            'es': 'Marcas en LATAM',
            'en': 'Latam Brands'
          },
          'infracciones': {
            'es': 'Infracciones de marca',
            'en': 'Trademark Infringements'
          },
          'contacto'    : {
            'es': 'Contacto',
            'en': 'Contact'
          }
        },
        'horarios': {
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
        }
      }
    }
  };

  constructor(private _LocalInjector: Injector, public _CMSService: CMSService) {
    super(_LocalInjector);
  }

  init() {
    console.log(this._ActivatedRoute.snapshot);
  }

  changeLanguage(lang: string): void {
    this._CMSService.currentLanguage = lang;
  }
}
