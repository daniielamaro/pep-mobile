import { Injectable } from '@angular/core';
import { UrlService } from '../shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private urlService: UrlService) { }

  entrar(emailCpf: string, senha: string){
    return this.urlService.sendRequestPost('/Paciente/AcessarSistema?usuario='+emailCpf+'&senha='+senha);
  }

}
