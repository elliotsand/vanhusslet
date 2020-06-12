import { Component, Injector } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

class InitialVMState {}

@Component({
  selector: 'app-socios',
  templateUrl: './infracciones.component.html',
  styleUrls: ['./infracciones.component.scss']
})
export class InfraccionesComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
