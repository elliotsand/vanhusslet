import { Component, Injector } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.scss']
})
export class SociosComponent extends RoutedViewModelComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
