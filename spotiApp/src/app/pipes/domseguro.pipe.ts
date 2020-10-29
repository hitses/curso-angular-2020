import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ){ }

  transform(value: string): any {
    const URL = 'https://open.spotify.com/embed/track/';
    const ID = value.split(':');

    return this.domSanitizer.bypassSecurityTrustResourceUrl(URL + ID[2]);
  }

}
