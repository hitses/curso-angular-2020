import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:sign';
  private apiKey = 'AIzaSyC55isaDXm5g5s6IZ38_0SNccZChPiPn7Y';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const AUTH_DATA = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}InWithPassword?key=${this.apiKey}`,
      AUTH_DATA
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const AUTH_DATA = {
      ...usuario,
      returnSecureToken: true,
    };

    return this.http.post(
      `${this.url}Up?key=${this.apiKey}`,
      AUTH_DATA
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const HOY = new Date();
    HOY.setSeconds(3600);
    localStorage.setItem('expira', HOY.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutentificado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const EXPIRA = Number(localStorage.getItem('expira'));
    const HOY = new Date();
    HOY.setTime(EXPIRA);

    if (HOY > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
