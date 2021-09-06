import { Injectable } from '@angular/core';
import { UrlService } from '../shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private urlService: UrlService) { }

  cadastrar(request: any){
    return this.urlService.sendRequestPost("/Paciente/Cadastrar", JSON.stringify(request));
  }
}
