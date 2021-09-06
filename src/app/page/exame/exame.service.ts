import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  constructor(private urlService: UrlService) { }

  consultarListaExames(id: string){
    return this.urlService.sendRequestPost("/Exame/ConsultarListaExame?id="+id);
  }

}
