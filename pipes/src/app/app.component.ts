import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  pi = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Lobezno',
    edad: '222',
    dirección: {
      calle: 'Graymalkin Lane',
      numero: 1407,
      municipio: 'Salem Center',
    },
  };
}
