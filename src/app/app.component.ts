import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
    <app-default-layout>
      <router-outlet></router-outlet>
    </app-default-layout>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ws-vanhasselt';
}
