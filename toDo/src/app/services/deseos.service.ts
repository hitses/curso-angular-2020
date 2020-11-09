import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const NUEVA_LISTA = new Lista(titulo);
    this.listas.push(NUEVA_LISTA);
    this.guardarStorage();

    return NUEVA_LISTA.id;
  }

  borrarLista(listaId: Lista) {
    this.listas = this.listas.filter(id => id !== listaId);
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else{
      this.listas = [];
    }
  }
}
