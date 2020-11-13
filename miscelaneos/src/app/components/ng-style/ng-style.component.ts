import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <button class="btn btn-primary" (click)="tamano = tamano - 1">
      <i class="fa fa-minus"></i>
    </button>
    <button class="btn btn-secondary" (click)="tamano = tamano + 1">
    <i class="fa fa-plus"></i>
    </button>
    <p [style.fontSize.px]="tamano">
      Hola mundo. Ésta es una etiqueta.
    </p>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamano = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
