import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private urlService: UrlService) { }

  async verificarValidadeToken(token: string){
    return await this.urlService.sendRequestPost("/Paciente/VerificarToken?token="+token);
  }

}
