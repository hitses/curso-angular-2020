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
  error: boolean;
  messageError: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().
      subscribe(resp => {
        this.nuevasCanciones = resp;
        this.loading = false;
      }, (e) => {
        this.loading = false;
        this.error = true;
        console.error(e.error.error.message);
        this.messageError = e.error.error.message;
      });
  }

  ngOnInit(): void {  }

}
