import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {
  alerta = 'alert-danger';
  nombre = 'peligro';
  propiedades = {
    danger: true,
  };
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(): any{
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

}
