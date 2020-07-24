import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';
import {AppService} from '../../app.service';

class InitialVMState {}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector,
              public _AppService: AppService) {
    super(_LocalInjector);
  }
  mensaje() {
    this._AppService.submitFormContact()
  }
}
