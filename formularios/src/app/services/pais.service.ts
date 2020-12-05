import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  getPaises(): any {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe(
      map(resp => {
        return resp.map(pais => {
          return {
            nombre: pais.nativeName,
            codigo: pais.alpha3Code
          };
        });
      })
    );
  }
}
