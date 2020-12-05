import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  forma: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(): any {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido(): any {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido(): any {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  crearFormulario(): any {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
        ]
      ],
    });
  }

  guardar(): any {
    if (this.forma.invalid){
      Object.values(this.forma.controls).forEach(control => control.markAsTouched());
    } else {
      console.log(this.forma.value);
    }
  }
}
