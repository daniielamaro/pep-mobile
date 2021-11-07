import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoViewService {

  constructor(private urlService: UrlService) { }

  async getMedicamentoById(id: string){
    return await this.urlService.sendRequestPost("/Medicamento/ConsultarMedicamentoById?idMedicamento="+id);
  }
}
