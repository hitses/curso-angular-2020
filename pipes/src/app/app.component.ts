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
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Fin de setTimeout(3500)');
    }, 3500);
  });

  fecha = new Date();
  idioma = 'es';

  jero = 'jErÓnImO gAscÓn sÁnchEz';
  videoUrl = 'https://www.youtube.com/embed/mdoNlV9GH6E';
}
