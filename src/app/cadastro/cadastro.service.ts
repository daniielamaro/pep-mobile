import { Injectable } from '@angular/core';
import { UrlService } from '../shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private urlService: UrlService) { }

  async cadastrar(request: any){
    return await this.urlService.sendRequestPost("/Paciente/Cadastrar", JSON.stringify(request));
  }
}
