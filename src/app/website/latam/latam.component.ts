import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

class InitialVMState {}

@Component({
  selector: 'app-latam',
  templateUrl: './latam.component.html',
  styleUrls: ['./latam.component.scss']
})
export class LatamComponent extends RoutedViewModelComponent {

  public vm: InitialVMState | any = new InitialVMState();

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
