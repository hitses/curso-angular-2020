import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {
    this.loading = true;

    this.activatedRoute.params
    .subscribe( (params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string): any {
    this.loading = true;

    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        this.artista = artista;
        this.loading = false;
      });
  }

  getTopTracks(id: string): any {
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

}
