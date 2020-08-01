import { Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router }          from '@angular/router';

import { routedPages } from '../app.config';

export abstract class RoutedViewModelComponent implements OnInit {
  public _Router;
  public _ActivatedRoute;
  private _vm = [];

  protected constructor (private _Injector: Injector) {
    this._Router = _Injector.get(Router);
    this._ActivatedRoute = _Injector.get(ActivatedRoute);

    this.loadCMSContent();
  }

  private loadCMSContent () {
    this.vm = { content: this._ActivatedRoute.snapshot.data.content || {} };
  }

  public goTo (alias: string) {
    try {
      const path = routedPages.find(route => route.alias.includes(alias)).path;
      this._Router.navigate([path]);
    } catch (e) {
      console.warn(`Route alias '${alias}' not found`);
    }
  }

  get lastVMIndex () {
    return this._vm.length - 1;
  }

  set vm (changes: object) {
    this._vm.push({ ...this.vm, ...changes });
  }

  get vm () {
    return this._vm[this.lastVMIndex];
  }

  public vmBack (count = 1) {
    const backState = this.lastVMIndex - count;
    this.vm = this._vm[backState];
  }

  ngOnInit (): void {
    setTimeout(() => this.runExternalScript(), 500);
    this.init();
  }

  runExternalScript () {
    import('../../assets/js/custom.js').then(e => console.log('External library loaded.'));
  }

  protected init () {}
}
