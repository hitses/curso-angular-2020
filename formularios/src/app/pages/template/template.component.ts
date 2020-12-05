import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Jerónimo',
    apellido: 'Gascón',
    correo: 'jero@mail.com',
    pais: 'ESP'
  };
  valid = true;
  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      paises => {
        this.paises = paises;
        this.paises.unshift({
          nombre: 'Selecciona un país',
          codigo: ''
        });
      });
  }

  guardar(forma: NgForm): any {
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
    } else {
      console.log(forma.value);
    }
  }

}
