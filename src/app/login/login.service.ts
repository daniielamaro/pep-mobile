import { Injectable } from '@angular/core';
import { UrlService } from '../shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private urlService: UrlService) { }

  async entrar(emailCpf: string, senha: string){
    return await this.urlService.sendRequestPost('/Paciente/AcessarSistema?usuario='+emailCpf+'&senha='+senha);
  }

}
