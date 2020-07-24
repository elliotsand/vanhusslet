import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  overlayActive = false;

  constructor() { }

  submitFormContact() {
    this.overlayActive = true;
  }
  closeMessage() {
    this.overlayActive = false;
  }

}
