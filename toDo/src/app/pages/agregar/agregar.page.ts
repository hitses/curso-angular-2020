import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = '';

  constructor(
    private deseosService: DeseosService,
    private router: ActivatedRoute
  ) {
    const LISTA_ID = this.router.snapshot.paramMap.get('listaId');

    this.lista = this.deseosService.obtenerLista(LISTA_ID);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0){
      return;
    }

    const NUEVO_ITEM = new ListaItem(this.nombreItem);

    this.lista.items.push(NUEVO_ITEM);
    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const PENDIENTES = this.lista.items
      .filter(itemData => !itemData.completado)
      .length;

    if (PENDIENTES === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.deseosService.guardarStorage();
  }
}
