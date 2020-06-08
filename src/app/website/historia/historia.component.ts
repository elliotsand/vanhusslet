import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

class InitialVMState {}

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent extends RoutedViewModelComponent {
  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
