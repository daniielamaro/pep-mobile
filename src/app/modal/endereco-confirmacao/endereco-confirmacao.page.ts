import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { EnderecoAtualService } from '../endereco-atual/endereco-atual.service';
import { EnderecoConfirmacaoService } from './endereco-confirmacao.service';

@Component({
  selector: 'app-endereco-confirmacao',
  templateUrl: './endereco-confirmacao.page.html',
  styleUrls: ['./endereco-confirmacao.page.scss'],
})
export class EnderecoConfirmacaoPage implements OnInit {

  item: any;
  plataformas: any;

  constructor(
    private enderecoConfirmacaoService: EnderecoConfirmacaoService,
    public plt: Platform,
    private modalController: ModalController
  ) {
    this.plataformas = this.plt.platforms();
  }

  ngOnInit() {
    console.log(this.item);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  async abrirClinica(clinica: any){
    (await this.enderecoConfirmacaoService.getEnderecoByAddress(
      clinica.endereco.logradouro +
      (clinica.endereco.numero ? ", " + clinica.endereco.numero : ", S/N") +
      " - " + clinica.endereco.bairro))
      .subscribe((resp: any) => {
        if(resp.results.length > 0){
          let location = resp.results[0].geometry.location;
          let coords = location.lat+","+location.lng;
          let a = document.createElement("a");
          if(this.plataformas.includes("cordova")){
            a.href = "geo:?q="+coords;
            a.target = "_system";
          }
          else{
            a.href = "http://maps.google.com/maps?q="+coords+"&ll="+coords+"&z=18";
            a.target = "_blank";
          }
          document.body.appendChild(a);
          a.click();
        }
      });
  }

  formatarDistancia(distancia: number){
    if(distancia < 1000) return distancia + (distancia > 1 ? " metros" : " metro");
    else return (distancia/1000).toFixed(1) + " Km";
  }

  formatarTempo(tempo: number){
    let dias =  Math.floor(tempo / 86400);
    let horas = Math.floor((tempo - (dias * 86400)) / 3600);
    let minutos = Math.floor((tempo - (dias * 86400) - (horas * 3600)) / 60);
    let segundos = (tempo - (dias * 86400) - (horas * 3600) - (minutos * 60));

    if(dias > 0) return dias > 1 ? dias + " dias" : dias + " dia";
    else if(horas > 0) return horas > 1 ? horas + " horas" : horas + " hora";
    else if(minutos > 0) return minutos > 1 ? minutos + " minutos" : minutos + " minuto";
    else if(segundos > 0) return segundos > 1 ? segundos + " segundos" : segundos + " segundo";
  }

}
