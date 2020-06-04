import { Component, Injector } from '@angular/core';
import { RoutedViewModelComponent }    from '../../routed-ViewModel.component';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent extends RoutedViewModelComponent {
  constructor (private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
