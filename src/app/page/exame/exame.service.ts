import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private urlService: UrlService) { }

  async consultarListaExames(id: string){
    return await this.urlService.sendRequestPost("/Exame/ConsultarListaExame?id="+id);
  }

}
