import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  error: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.login(this.usuario).subscribe(
      resp => {
        console.log(resp);
      }, err => {
        if (err.error.error.message === 'EMAIL_NOT_FOUND' || err.error.error.message === 'INVALID_PASSWORD') {
          this.error = 'Email o contraseña inválidos';
        }
      }
    );
  }

}
