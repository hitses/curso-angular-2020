import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style><hr>
    <app-css></app-css>
    <p>
      Hola mundo desde app.component.html
    </p><hr>
    <app-clases></app-clases><hr>
    <p [appResaltado]="'coral'">Resaltado desde una directiva</p><hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})

export class HomeComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
