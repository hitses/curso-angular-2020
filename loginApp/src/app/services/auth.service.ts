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
    return;
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
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
}
