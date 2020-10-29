import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(
    private http: HttpClient
  ) {  }

  getQuery(query: string): any {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer BQCy50hwc258JvcgTyurrDryejEnPeER7FRry5PreGl_7ZpbrxyLQDmKBjB6NcvCQB3Wgtus7VK0efNdjBY`,
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
      .pipe(map((resp: any) => resp.albums.items));
  }

  getArtistas(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((resp: any) => resp.artists.items));
  }

  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
      // .pipe(map((resp: any) => resp.artists.items));
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map((resp: any) => resp.tracks));
  }
}
