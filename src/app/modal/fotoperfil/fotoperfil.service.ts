import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/class/url-service';

@Injectable({
  providedIn: 'root'
})
export class FotoperfilService {

  constructor(private urlService: UrlService) { }

  mudarFoto(fotoBin: any, fotoTipo: any, id: string){
    let request = {
      id: id,
      foto: {
        nome: Date.now.toString(),
        tipo: fotoTipo,
        binario: fotoBin
      }
    };
    return this.urlService.sendRequestPost("/Paciente/AlterarFotoPerfil", JSON.stringify(request));
  }

  /*removerFoto(id: string){
    return this.urlService.sendRequestPost("/User/DeletePhotoUser?id="+id);
  }*/
}
