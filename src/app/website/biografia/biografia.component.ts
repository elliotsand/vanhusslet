import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

class InitialVMState {}

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.scss']
})
export class BiografiaComponent extends RoutedViewModelComponent {
  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
