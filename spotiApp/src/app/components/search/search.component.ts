import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  buscar(termino): any {
    this.loading = true;

    this.spotifyService.getArtistas(termino).
      subscribe((resp: any) => {
        this.artistas = resp;
        this.loading = false;
      });
  }

}
