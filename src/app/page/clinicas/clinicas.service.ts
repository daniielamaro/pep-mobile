import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ClinicasService {

  constructor(private urlService: UrlService) { }

  async consultarListaClinica(coordenada: string){
    return await this.urlService.sendRequestPost("/Clinica/GetListaClinicaByDistancia?coordenada="+coordenada);
  }
}
