import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent extends RoutedViewModelComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
