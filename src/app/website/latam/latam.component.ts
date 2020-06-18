import { Component, Injector, OnInit } from '@angular/core';
import { RoutedViewModelComponent }    from '../../core/routed-ViewModel.component';

@Component({
  selector: 'app-latam',
  templateUrl: './latam.component.html',
  styleUrls: ['./latam.component.scss']
})
export class LatamComponent extends RoutedViewModelComponent {

  constructor(private _LocalInjector: Injector) {
    super(_LocalInjector);
  }
}
