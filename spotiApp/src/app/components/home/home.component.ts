import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;

    this.spotifyService.getNewReleases().
      subscribe(resp => {
        console.log(resp);
        this.nuevasCanciones = resp;
        this.loading = false;
      });
  }

  ngOnInit(): void {  }

}
