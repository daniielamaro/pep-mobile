import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private urlService: UrlService) { }

  async consultarListaConsultas(id: string){
    return await this.urlService.sendRequestPost("/Consulta/ListaConsulta?idPaciente="+id);
  }

  async consultarListaTiposConsultas(){
    return await this.urlService.sendRequestPost("/Consulta/ListaTiposConsultas");
  }

  async salvarConsulta(request: any){
    return await this.urlService.sendRequestPost("/Consulta/CadastroConsulta", JSON.stringify(request));
  }
}
