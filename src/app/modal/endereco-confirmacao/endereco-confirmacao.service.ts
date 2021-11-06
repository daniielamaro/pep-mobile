import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoConfirmacaoService {

  constructor(private urlService: UrlService) { }

  async getEnderecoByAddress(address: string){
    return await this.urlService.sendRequestPostCustom(
      "https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&result_type=street_address&language=pt-BR&key="+UrlService.GMKey
    );
  }
}
