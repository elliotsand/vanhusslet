import {Component, Injector, OnInit} from '@angular/core';
import {RoutedViewModelComponent} from '../../core/routed-ViewModel.component';
import {AppService} from '../../app.service';
import {Meta, Title} from '@angular/platform-browser';

class InitialVMState {
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector,
              private meta: Meta,
              private titleService: Title,
              public _AppService: AppService) {
    super(_LocalInjector);
    this.meta.addTag(
      {name: 'description', content: 'Realice una consulta con el especialista en propiedad intelectual\n' +
          'protección de marcas'}
    );

    this.meta.updateTag(
      {name: 'description', content: 'Realice una consulta con el especialista en propiedad intelectual\n' +
          'protección de marcas'},
    );
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  init() {
    this.setTitle('Solicite una Asesoria | JP Van Hasselt');
  }

  mensaje() {
    this._AppService.submitFormContact();
  }
}
