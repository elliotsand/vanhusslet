import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent extends RoutedViewModelComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
